import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"

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
