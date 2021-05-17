import React from 'react'
import { Box, Image } from "@chakra-ui/react"

export default function Project({project}) {
    return (
      <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={project.imgSrc} alt={project.title} />

        <Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {project.title}
          </Box>
          <Box as="p" color="dark" fontSize="sm" isTruncated>
            {project.description}
          </Box>
        </Box>
      </Box>
    )
}
