import React from "react"
import {
  ChakraProvider,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Avatar,
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
import avatar from "../images/avatar.jpg"

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
        </Fade>
      </main>

      <main id="portfolio" className="container">
        <Heading
          fontFamily="body"
          size="lg"
          color="white"
          bg="black"
          p="1rem 2rem"
          letterSpacing={1.5}
        >
          portfolio
        </Heading>
        {/* <Stack direction="row" spacing={4} align="center">
          {techFilterBtns}
        </Stack> */}
        <SimpleGrid columns={[1, 2, 3]}>{projects}</SimpleGrid>
      </main>

      <main id="about">
        <Box mb="1rem">
          <div className="card">
            <div className="card-body">
              <Box className="card-front">
                <Heading size="xl">Hi, hello, and welcome.</Heading>
                <Text>
                  I am a front end developer who values the design and
                  development process. I am passionate about creating products
                  that are eye-catching, impactful and long-lasting.
                </Text>
              </Box>
              <Box className="card-back">
                <Avatar size="2xl" name="Tiffany Thai" src={avatar} />
                <Text fontWeight="bolder" mt="1rem">
                  Tiffany T.
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Front End Developer
                </Text>
              </Box>
            </div>
          </div>
        </Box>

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
              <Fade left>
                <Heading>Planning</Heading>
                <Text>
                  Effective communication generates successful collaborations.
                  Asking the right questions. Goals are clear and precise.
                </Text>
              </Fade>
            </Box>
            <Box p="3rem">
              <Fade left>
                <Heading>Design</Heading>
                <Text>
                  The big picture. Using the latest patterns and technologies to
                  craft a solid foundation to produce a productive development
                  process.
                </Text>
              </Fade>
            </Box>
            <Box p="3rem">
              <Fade left>
                <Heading>Development</Heading>
                <Text>
                  Readable and clean code. Bringing ideas and prototypes to
                  life. Creating meaningful and user-first products for the
                  better of society.
                </Text>
              </Fade>
            </Box>
            <Box p="3rem">
              <Fade left>
                <Heading>Retrospective</Heading>
                <Text>
                  Taking feedback into considerations to improve the process. A
                  new day mean a new chance to start a different and even better
                  story.
                </Text>
              </Fade>
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
