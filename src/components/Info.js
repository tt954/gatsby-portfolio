import React from "react"

export default function Info() {
  return (
    <section className="section__info">
      <img src="src/media/images/avatar.jpg" alt="tieulam's avatar" />
      <p>tieulam thai</p>
      <p>portfolio and blog</p>
      <p className="text-sm">
        Hello World{" "}
        <span role="img" aria-label="world">
          🌎
        </span>
        I am a frontend developer who loves problem solving and unconventional
        designs.
      </p>
    </section>
  )
}
