import React, { useState } from "react"
import * as emailjs from "emailjs-com"
import { emailjsKEYS } from "../../media/keys"
import { TextField, Button } from "@material-ui/core/"

export default function Contact() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleFNChange = e => setFirstName(e.target.value)
  const handleLNChange = e => setLastName(e.target.value)
  const handleEmail = e => setEmail(e.target.value)
  const handleSubject = e => setSubject(e.target.value)
  const handleMessage = e => setMessage(e.target.value)

  const resetForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const messageParams = {
      name: firstName + lastName,
      email,
      subject,
      message,
    }
    emailjs.send(
      emailjsKEYS.serviceId,
      emailjsKEYS.templateId,
      messageParams,
      emailjsKEYS.userId
    )
    resetForm()
    console.log(messageParams)
  }

  return (
    <div className="main__contact">
      <form className="contactForm" onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-basic"
          label="First Name"
          value={firstName}
          onChange={handleFNChange}
        />
        <TextField
          id="standard-basic"
          label="Last Name"
          value={lastName}
          onChange={handleLNChange}
        />
        <TextField
          required
          id="standard-basic"
          label="Email"
          value={email}
          onChange={handleEmail}
        />
        <TextField
          required
          id="standard-basic"
          label="Subject"
          value={subject}
          onChange={handleSubject}
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={message}
          onChange={handleMessage}
        />
        <Button color="secondary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}
