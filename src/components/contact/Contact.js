import React from 'react'
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

export default function Contact() {
    return (
      <div className="main__contact">
        <form className="contactForm">
          <TextField required id="standard-basic" label="First Name" />
          <TextField required id="standard-basic" label="Last Name" />
          <TextField required id="standard-basic" label="Email" />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button color="secondary">Secondary</Button>
        </form>
      </div>
    )
}
