import React from "react"

import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button } from "@material-ui/core"

const Project = ({
  title,
  ghlink,
  livelink,
  description,
  technologies,
  imgSrc,
}) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image="https://images.unsplash.com/photo-1619983081593-e2ba5b543168?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Button href={ghlink} size="small" color="primary">Github</Button>
          <Button href={livelink} size="small" color="primary">Live</Button>
      </CardActions>
    </Card>
  )
}

export default Project
