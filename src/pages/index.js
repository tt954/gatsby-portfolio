import React from "react"
import { ChakraProvider, Heading, Text } from "@chakra-ui/react"
import Header from '../components/Header'
import theme from '../styles/theme'

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Heading as="h1" size="2xl" color="dark">
        hello, iam()
      </Heading>
      <Text color="indigo">Tieulam Thai</Text>
      <Text noOfLines={2}>
        Frontend developer. Fashion enthusiast and plant lover.
      </Text>
    </ChakraProvider>
  )
}
