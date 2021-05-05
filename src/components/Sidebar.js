import React from 'react'
import { Link } from "gatsby"
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import avatar from "../media/images/avatar.jpg"

export default function Sidebar() {
    return (
      <div className="main__sidebar">
        <section className="sidebar__info">
          <img src={avatar} alt="tieulam's avatar" />
          <p>tieulam thai</p>
          <p>portfolio & blog</p>
          <p className="sb-info__about">
            Hello World{" "}
            <span role="img" aria-label="world">
              🌎
            </span>{" "}
            I am a front-end developer who loves problem solving and
            unconventional designs.
          </p>
        </section>

        <section className="sidebar__socials">
          <li>
            <FaGithub />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaInstagram />
          </li>
        </section>

        <nav className="sidebar__nav">
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    )
}
