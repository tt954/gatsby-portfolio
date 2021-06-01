import React from "react"
import { Box, Heading, Text } from "@chakra-ui/react"
import Fade from "react-reveal/Fade"

export default function WorkEthic({ how }) {
  return (
    <Box p={["1rem", "3rem"]}>
      <Fade left>
        <Heading fontSize={["lg", "3xl"]}>{how.heading}</Heading>
        <Text>{how.body}</Text>
      </Fade>
    </Box>
  )
}
