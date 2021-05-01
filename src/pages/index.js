import React from "react"
import Header from "../components/Header"
import Project from "../components/Project"
import Hero from '../components/Hero'

import { projectData } from '../media/data'
import "tailwindcss/dist/base.min.css"
import "../styles/index.scss"

export default function Home() {
  const projects = projectData.map((project, idx) => (
    <Project
      key={idx}
      title={project.title}
      technologies={project.technologies}
      description={project.description}
      ghlink={project.ghlink}
      livelink={project.livelink}
      imgSrc={project.imgSrc}
    />
  ))

  return (
    <div>
      <div className="main__sidebar max-w-sm flex flex-col mt-40">
        <Hero />
        <Header />
      </div>

      {/* <div className="section__projects">
        {projects}
      </div> */}
    </div>
  )
}
