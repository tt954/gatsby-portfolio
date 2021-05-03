import React from "react"
import Info from '../components/Info'
import Socials from '../components/Socials'
import Navbar from "../components/Navbar"
import Project from "../components/Project"

import { projectData } from '../media/data'
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
      <div className="main__sidebar">
        <Info />
        <Socials />
        <Navbar />
      </div>

      {/* <div className="section__projects">
        {projects}
      </div> */}
    </div>
  )
}
