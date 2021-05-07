import React from "react"

import { ThemeProvider } from "@material-ui/styles"
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"

import Sidebar from "../components/Sidebar"
import Project from "../components/project/Project"
import { projectData } from "../media/data"
import theme from "../styles/theme"
import "../styles/index.scss"

const make = makeStyles({
    header: {
        fontSize: '3.2rem',
        borderBottom: '1px solid',
        borderColor: theme.palette.primary,
        marginBottom: '2rem'
    }
})

export default function portfolio() {
  const classes = make()
  const projects = projectData.map((project, idx) => (
    <Grid xs={3} key={idx} item>
      <Project key={idx} project={project} />
    </Grid>
  ))

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />

        <main className="main">
          <h2 className={classes.header}>Projects</h2>
          <Grid container spacing={2}>
            {projects}
          </Grid>
        </main>
      </div>
    </ThemeProvider>
  )
}
