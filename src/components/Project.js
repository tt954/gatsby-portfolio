import React from "react"
import {
  Flex,
  Spacer,
  Box,
  Text,
  Image,
  Button,
  Collapse,
} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import { FaAngleDown } from "react-icons/fa"

export default function Project({ project }) {
  const { isOpen, onToggle } = useDisclosure()

  const projectDetails = (
    <Box>
      <p>{project.title}</p>
      <p>{project.technologies}</p>
      <p>{project.description}</p>
    </Box>
  )

  return (
      <Box direction="column">
        <Image src={project.imgSrc} alt={project.title} transition="all 0.5s ease-in-out"/>
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
