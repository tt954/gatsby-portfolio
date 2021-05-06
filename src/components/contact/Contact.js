import React, { useState } from "react"
import * as emailjs from "emailjs-com"
import { emailjsKEYS } from "../../media/data"

import { makeStyles } from "@material-ui/core/styles"
import { TextField, Button } from "@material-ui/core/"

const useStyles = makeStyles({
  group: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
  },
  submitBtn: {
    margin: '2rem 0',
    color: "white",
  },
})

export default function Contact() {
  const classes = useStyles()

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
          <div className={classes.group}>
            <TextField
              required
              id="name"
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
              margin="dense"
            />
            <TextField
              required
              id="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              margin="dense"
            />
          </div>
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
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            className={classes.submitBtn}
          >
            Send
          </Button>
        </form>
      </section>
    </div>
  )
}
