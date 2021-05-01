import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <nav className="section__nav col-centered mt-16">
      <Link className="hover:text-primary mb-4" to="/">
        Home
      </Link>
      <Link className="hover:text-primary mb-4" to="/about">
        About
      </Link>
      <Link className="hover:text-primary mb-4" to="/contact">
        Contact
      </Link>
      <Link className="hover:text-primary mb-4" to="/blog">
        Blog
      </Link>
    </nav>
  )
}
