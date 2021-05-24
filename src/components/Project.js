import React, { useState } from "react"
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  Button,
  Collapse,
} from "@chakra-ui/react"

export default function Project({ project }) {
  const projectDetails = (
    <Box className="p-details">
      <Text
        color="light"
        fontFamily="heading"
        fontSize="lg"
        fontWeight="bolder"
        textTransform="uppercase"
        textShadow="0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);"
      >
        {project.title}
      </Text>
    </Box>
  )

  return (
    <Box
      className="p-card"
      direction="column"
      cursor="pointer"
      position="relative"
      as="a"
      href={project.livelink}
      target="_blank"
    >
      <Image className="p-face" src={project.imgSrc} alt={project.title} />
      {projectDetails}
    </Box>
  )
}

{
  /* <div className="card-body">
  <Box className="card-front" bg="light">
    <img src={project.imgSrc} alt={project.title} />
    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
      {project.title}
    </Box>
  </Box>
  <Box className="card-back">
    <p>{project.title}</p>
    <p>{project.technologies}</p>
    <p>{project.description}</p>
  </Box>
</div> */
}
