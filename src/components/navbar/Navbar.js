import React from "react"
import Link from "gatsby-link"

import IconButton from "@material-ui/core/IconButton"
import { makeStyles } from "@material-ui/core/styles"
import { Home, Search, ArrowUpward } from "@material-ui/icons"

const useStyles = makeStyles({
  group: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
})

export default function Navbar() {
  const classes = useStyles()
  return (
    <div className="main__navbar">
      <div className={classes.group}>
        <IconButton
          color="secondary"
          aria-label="Back to home"
          title="Back to home"
        >
          <Home />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="Search"
          title="Search"
          component={Link}
          to="/search/"
        >
          <Search />
        </IconButton>
      </div>
      <div className={classes.group}>
        <IconButton
          color="secondary"
          aria-label="Back to top"
          title="Scroll to top"
        >
          <ArrowUpward />
        </IconButton>
      </div>
    </div>
  )
}
