import React from "react"

import { makeStyles } from "@material-ui/core/styles"
import {
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
} from "@material-ui/core"

const useStyles = makeStyles({
  card: {
    backgroundColor: "transparent",
    borderRadius: 0,
    borderBottom: '1px solid black',
    boxShadow: "none",
  },
  media: {},
})

const Project = ({ project }) => {
  const { title, ghlink, livelink, description, technologies, imgSrc } = project
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea href={livelink} target="_blank">
        <CardMedia
          className={classes.media}
          component="img"
          alt={title}
          image={imgSrc}
          title={title}
        />
        <CardContent>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={ghlink} size="small" color="primary">
          Github
        </Button>
        <Button href={livelink} size="small" color="primary">
          Live
        </Button>
      </CardActions>
    </Card>
  )
}

export default Project
