import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core/"

export default function Contact() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleFNChange = e => setFirstName(e.target.value)
    const handleLNChange = e => setLastName(e.target.value)

    return (
      <div className="main__contact">
        <form className="contactForm">
          <TextField
            required
            id="standard-basic"
            label="First Name"
            value={firstName}
            onChange={handleFNChange}
          />
          <TextField
            required
            id="standard-basic"
            label="Last Name"
            value={lastName}
            onChange={handleLNChange}
          />
          <TextField required id="standard-basic" label="Email" />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button color="secondary">Secondary</Button>
          {console.log(firstName)}
        </form>
      </div>
    )
}
