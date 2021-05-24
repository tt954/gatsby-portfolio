import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Flex,
  Stack,
  Box,
  Text,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Link,
  IconButton,
} from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"

import Resume from "../images/resume.pdf"

export default function Header() {
  const navMenu = (
    <Stack
      color="gray.500"
      fontFamily="heading"
      fontWeight="normal"
      direction="row"
      align="center"
      spacing={10}
    >
      <Link onClick={() => scrollTo("#portfolio")}>Projects</Link>
      <Link onClick={() => scrollTo("#about")}>About</Link>
      <Link onClick={() => scrollTo("#contact")}>Contact</Link>
      <Link
        className="resumeBtn"
        href={Resume}
        target="__blank"
        bg="indigo"
        color="white"
        fontWeight="bolder"
        p="0.5rem 1rem"
        _hover={{ bg: "pink" }}
      >
        Resume
      </Link>
    </Stack>
  )

  const mobileNav = (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        bg="light"
        size="xl"
        icon={<GiHamburgerMenu />}
      />
      <MenuList>
        <MenuItem onClick={() => scrollTo("#portfolio")}>Portfolio</MenuItem>
        <MenuItem onClick={() => scrollTo("#about")}>About</MenuItem>
        <MenuItem onClick={() => scrollTo("#contact")}>Contact</MenuItem>
        <MenuItem>
          <a href={Resume} target="__blank">
            Resume
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  )

  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      borderBottom="1px solid black"
      bgColor="light"
      position="fixed"
      fontSize="lg"
      fontWeight="bold"
      w="100%"
      p="1.5rem 4rem"
      zIndex="999"
    >
      <Box>
        <Box display={{ base: "none", md: "block" }} lineHeight="1.35rem">
          <Text fontSize="3xl">tiffanythai.</Text>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Text fontSize="3xl">tt.</Text>
        </Box>
      </Box>

      <Box>
        <Box display={{ base: "none", md: "block" }}>{navMenu}</Box>
        <Box display={{ base: "block", md: "none" }}>{mobileNav}</Box>
      </Box>
    </Flex>
  )
}
