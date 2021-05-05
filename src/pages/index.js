import React from "react"

import Sidebar from '../components/Sidebar'
import Contact from '../components/contact/Contact';
// import { projectData } from '../media/data'
import '../styles/index.scss';

export default function Home() {
  // const projects = projectData.map((project, idx) => (
  //   <Project
  //     key={idx}
  //     title={project.title}
  //     technologies={project.technologies}
  //     description={project.description}
  //     ghlink={project.ghlink}
  //     livelink={project.livelink}
  //     imgSrc={project.imgSrc}
  //   />
  // ))

  return (
    <div className="App">
      <Sidebar />
      <Contact />
    </div>
  )
}
