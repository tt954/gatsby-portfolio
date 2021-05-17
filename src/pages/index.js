import React from "react"
import { ChakraProvider, Heading, Text, SimpleGrid, Center, Stack, Button } from "@chakra-ui/react"
import Header from "../components/Header"
import Project from "../components/Project"
import theme from "../styles/theme"
import { projectData, techs } from "../data"

export default function Home() {
  const projects = projectData.map((project, idx) => (
    <Project key={idx} project={project} />
  ))

  const techFilterBtns = techs.map(tech => (
    <Button variant="outlined" bg="indigo" color="light" size="xs" borderRadius="lg">
      {tech}
    </Button>
  ))

  return (
    <ChakraProvider theme={theme}>
      <Header />

      <Center h="100vh" px='10rem' flexDirection="column" alignItems="flex-start">
        <Heading as="h1" size="2xl" color="dark">
          hello, iam()
        </Heading>
        <Text color="indigo">Tieulam Thai</Text>
        <Text noOfLines={2}>
          Frontend developer. Fashion enthusiast and plant lover.
        </Text>
      </Center>

      <section id="portfolio">
        <Heading as="h2" size="lg" color="dark">
          Portfolio
        </Heading>
        <Stack direction="row" spacing={4} align="center">
          {techFilterBtns}
        </Stack>
        <SimpleGrid columns={3} spacing={4}>
          {projects}
        </SimpleGrid>
      </section>
    </ChakraProvider>
  )
}
