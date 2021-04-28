import React from "react"
import Header from "../components/header"
import Project from "../components/project"

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
      <Header />
      <div className="section__hero">
        <h1>
          Hello World{" "}
          <span role="img" aria-label="world" style={{ fontStyle: "normal" }}>
            🌎
          </span>
        </h1>
        <p>My name is Tieulam.</p>
      </div>

      <div className="section__projects">
        {projects}
      </div>
    </div>
  )
}
