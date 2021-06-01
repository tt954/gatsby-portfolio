import React, { useState } from "react"
import { Stack, Input, Textarea, Button } from "@chakra-ui/react"
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
      <Stack direction={["column", "row"]} spacing={["0", "1rem"]}>
        <Input
          required
          placeholder="Name"
          borderRadius="none"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          required
          placeholder="Email"
          borderRadius="none"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Stack>
      <Input
        placeholder="Subject"
        borderRadius="none"
        value={subject}
        onChange={e => setSubject(e.target.value)}
      />
      <Textarea
        placeholder="Message"
        borderRadius="none"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        w="100%"
        borderRadius="none"
        bg="indigo"
        color="white"
        type="submit"
      >
        Send
      </Button>
    </form>
  )
}
