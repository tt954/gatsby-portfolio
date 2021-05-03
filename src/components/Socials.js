import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Socials() {
    return (
      <section className="section__socials">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </section>
    )
}
