import React from "react"
import { ChakraProvider, Heading, Text, SimpleGrid, Center, Container, Stack, Button } from "@chakra-ui/react"
import Header from "../components/Header"
import Project from "../components/Project"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import theme from "../styles/theme"
import '../styles/index.scss'
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

      <Center
        backgroundImage="url('/images/hero.png')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        h="100vh"
        px="10rem"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Heading as="h1" size="3xl" color="dark">
          Development. Design. User Interface.
        </Heading>
        <Text color="indigo" fontSize="2xl" fontWeight="bold">
          tiffany
        </Text>
        <Text fontSize="lg">
          Frontend developer. Fashion enthusiast and plant lover.
        </Text>
      </Center>

      <main id="portfolio" className="container">
        <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
          Portfolio
        </Heading>
        <Text color="indigo">Some fun projects.</Text>
        {/* <Stack direction="row" spacing={4} align="center">
          {techFilterBtns}
        </Stack> */}
        <SimpleGrid columns={[1, 2, 3]} spacing={4} py={2}>
          {projects}
        </SimpleGrid>
      </main>

      <main id="about" className="container">
        <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
          A little about me
        </Heading>
      </main>

      <main id="contact" className="container">
        <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
          Say hello.
        </Heading>
        <ContactForm />
      </main>

      <Footer />
    </ChakraProvider>
  )
}
