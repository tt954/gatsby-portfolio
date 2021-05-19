import React, { useState } from "react"
import { Flex, Input, Button } from "@chakra-ui/react"
import * as emailjs from "emailjs-com"
import { emailjsKEYS } from "../data"

export default function ContactForm() {

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
    <form className="contactForm" onSubmit={handleSubmit}>
      <Flex>
        <Input
          required
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          required
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Flex>
      <Input
        placeholder="Subject"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <Input
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button type="submit">Send</Button>
    </form>
  )
}
