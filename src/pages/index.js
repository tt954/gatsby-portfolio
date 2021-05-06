import React from "react"

import { ThemeProvider } from "@material-ui/styles"

import Sidebar from "../components/Sidebar"
import Contact from "../components/contact/Contact"
import theme from "../styles/theme"
import "../styles/index.scss"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sidebar />

        <main className="main">
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
