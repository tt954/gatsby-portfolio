import React from "react"
import {
  ChakraProvider,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Square,
  Button,
} from "@chakra-ui/react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"

import Header from "../components/Header"
import Project from "../components/Project"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import theme from "../styles/theme"


import photo from "../images/landing.jpg"
import art from '../images/ttart.jpg'


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
      <Header />

      <main id="landing">
        <Fade top>
          <Heading as="h1" size="3xl" color="dark">
            User <span>friendly</span> interface
            <Text>Design and Development</Text>
          </Heading>
          <Text fontSize="2xl" mt="0.5rem">
            Frontend developer
          </Text>
        </Fade>
      </main>

      <main id="portfolio" className="container">
        <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
          Portfolio
        </Heading>
        <Text color="indigo">Some fun projects.</Text>
        {/* <Stack direction="row" spacing={4} align="center">
          {techFilterBtns}
        </Stack> */}
        <SimpleGrid columns={[1, 2, 3]} py={2}>
          {projects}
        </SimpleGrid>
      </main>

      <main id="about">
        <section className="container">
          <Heading as="h2" size="lg" color="dark" letterSpacing={1.5}>
            A little about me
          </Heading>
        </section>

        <Box className="howiwork" p="5rem 10rem">
          <Heading>How I work</Heading>
          <SimpleGrid columns={[1, null, 2]} color="white">
            <Box border="1px solid black">
              <Heading>Planning</Heading>
              <Text>Ask the right questions. With a clear path in mind, </Text>
            </Box>
            <Box border="1px solid black">
              <Heading>Design</Heading>
              <Text>The big picture.</Text>
            </Box>
            <Box border="1px solid black">
              <Heading>Development</Heading>
              <Text>Readable and clean code. </Text>
            </Box>
            <Box border="1px solid black">
              <Heading>Retrospective</Heading>
              <Text>For a better tomorrow. Learn from today.</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </main>

      <Flex id="contact" boxShadow="md" m="5rem">
        <img src={photo} />
        <Box flex="1" p="2rem">
          <Heading as="h2" size="lg" color="dark" mb="1rem" letterSpacing={1.5}>
            Send me a message
          </Heading>
          <div className="contactWrapper">
            <ContactForm />
          </div>
        </Box>
      </Flex>

      <Footer />
    </ChakraProvider>
  )
}
