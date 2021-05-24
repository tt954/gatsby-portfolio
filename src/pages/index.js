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

import Header from "../components/Header"
import Project from "../components/Project"
import Experience from "../components/Experience"
import ContactForm from "../components/ContactForm"
import Footer from "../components/Footer"
import theme from "../styles/theme"

import photo from "../images/landing.jpg"
import avatar from "../images/avatar.jpg"

import "../styles/index.scss"
import { experiences, projectData, techs } from "../data"

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
            User <span>Friendly</span> Interface
            <Text>Design and Development</Text>
          </Heading>
        </Fade>
      </main>

      <Box id="portfolio" p="0 5rem 5rem">
        <Heading
          fontFamily="body"
          size="lg"
          color="white"
          bg="black"
          p="1rem 2rem"
          letterSpacing={1.5}
        >
          portfolio (some fun projects)
        </Heading>
        <SimpleGrid columns={[1, 2, 3]}>{projects}</SimpleGrid>
      </Box>

      <main id="about">
        <Box m="0 0 5rem" border="1px solid black" borderBottom="none">
          <Box>
            <div className="card">
              <div className="card-body">
                <Box className="card-front">
                  <Heading size="3xl">Hi, hello, and welcome.</Heading>
                  <Text>
                    I am a front end developer who values the design and
                    development process. I am passionate about creating products
                    that are eye-catching, impactful, and long-lasting. I have 5
                    years of experience in building web applications using React
                    and Redux. Proficient in HTML, CSS, Javascript, plus other
                    modern frameworks and libraries.
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
          <SimpleGrid className="exp" columns={[1, 1, 2, 4]}>
            {experiences.map((item, idx) => (
              <Experience key={idx} exp={item} />
            ))}
          </SimpleGrid>
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
        <img src={photo} alt="contactform photo"/>
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
