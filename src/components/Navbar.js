import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="section__nav">
      <Link to="/">
        Home
      </Link>
      <Link to="/about">
        About
      </Link>
      <Link to="/contact">
        Contact
      </Link>
      <Link to="/blog">
        Blog
      </Link>
    </nav>
  )
}
