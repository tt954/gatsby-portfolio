import React, { useState } from "react"
import * as emailjs from "emailjs-com"
import { emailjsKEYS } from "../../media/data"
import { TextField, Button } from "@material-ui/core/"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const resetForm = () => {
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    const messageParams = {
      name,
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
  }

  return (
    <div className="main__contact">
      <section className="contact__header">
        <div>
          Say hi{" "}
          <span role="img" aria-label="waving hand">
            👋🏼
          </span>
        </div>
      </section>
      <section className="contact__main">
        <form className="contactForm" onSubmit={handleSubmit}>
          <TextField
            required
            id="name"
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            required
            id="email"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextField
            id="subject"
            label="Subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
          />
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Button color="secondary" type="submit">
            Send
          </Button>
        </form>
      </section>
    </div>
  )
}
