import React from "react"
import {
  ChakraProvider,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Container,
  Stack,
  Button,
} from "@chakra-ui/react"
import Fade from "react-reveal/Fade"

import Header from "../components/Header"
import Project from "../components/Project"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import theme from "../styles/theme"
import Landing from "../images/landing.jpg"
import "../styles/index.scss"
import { projectData, techs } from "../data"

export default function Home() {
  const projects = projectData.map((project, idx) => (
    <Project key={idx} project={project} />
  ))

  const techFilterBtns = techs.map(tech => (
    <Button
      variant="outlined"
      bg="indigo"
      color="light"
      size="xs"
      borderRadius="lg"
    >
      {tech}
    </Button>
  ))

  return (
    <ChakraProvider theme={theme}>
      <section id="landing">
        <Header />

        <Flex
          p="6rem 5rem 5rem"
          flexDirection="column"
          align="flex-start"
          justify="center"
        >
          <Fade top>
            <Heading as="h1" size="3xl" color="dark">
              User <span>Friendly</span> Interface
              <Text>Design and Development.</Text>
            </Heading>
            <Text size="lg" mt="0.5rem">
              Frontend developer. Fashion enthusiast and plant lover.
            </Text>
          </Fade>
        </Flex>
      </section>

      <main id="portfolio" className="container">
        <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
          Portfolio
        </Heading>
        <Text color="indigo">Some fun projects.</Text>
        {/* <Stack direction="row" spacing={4} align="center">
          {techFilterBtns}
        </Stack> */}
        <SimpleGrid columns={[1, null, 2]} py={2}>
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
        <div className="contactWrapper">
          <ContactForm />
        </div>
      </main>

      <Footer />
    </ChakraProvider>
  )
}
