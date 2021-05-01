import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Hero() {
  return (
    <div className="section__info text-heading mx-12">
      
      <div className='info'>
          <img className="rounded-full" src="src/media/images/avatar.jpg" alt="tieulam's avatar" />
          <p className="font-sans text-2xl font-light italic tracking-widest">tieulam thai</p>
          <p>portfolio and blog</p>
          <p className="text-sm">
            Hello World{" "}
            <span role="img" aria-label="world">
              🌎 
            </span> 
             I am a frontend developer who loves problem solving and unconventional designs.
          </p>
      </div>

      <div className="flex justify-center mt-8 space-x-6 text-2xl">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaInstagram />
        </li>
      </div>
    </div>
  )
}
