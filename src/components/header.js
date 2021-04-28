import React from "react"
import { Link } from "gatsby"

export default function Header(props) {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/blog">Blog</Link>
    </header>
  )
}
