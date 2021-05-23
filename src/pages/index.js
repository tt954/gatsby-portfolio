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
import art from "../images/ttart.jpg"

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

        <Flex className="howiwork" p={["2rem 3rem", "4rem 5rem", "8rem 10rem"]}>
          <Heading
            className="hiwHeading"
            fontFamily="body"
            color="light"
            letterSpacing={10}
          >
            how i work
          </Heading>
          <SimpleGrid className="points" columns={[1, 1, 1, 2]} color="white">
            <Box p="3rem">
              <Heading>Planning</Heading>
              <Text>
                Effective communication generates successful collaborations.
                Asking the right questions. Goals are clear and precise.
              </Text>
            </Box>
            <Box p="3rem">
              <Heading>Design</Heading>
              <Text>
                The big picture. Using the latest patterns and technologies to
                craft a solid foundation to produce a productive development
                process.
              </Text>
            </Box>
            <Box p="3rem">
              <Heading>Development</Heading>
              <Text>
                Readable and clean code. Bringing ideas and prototypes to life.
                Creating meaningful and user-first products for the better of
                society.
              </Text>
            </Box>
            <Box p="3rem">
              <Heading>Retrospective</Heading>
              <Text>
                Taking feedback into considerations to improve the process. A
                new day mean a new chance to start a different and even better
                story.
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
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
