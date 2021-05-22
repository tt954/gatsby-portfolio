import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Flex,
  Box,
  Text,
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Menu, 
  MenuList, 
  MenuButton, 
  MenuItem,
  IconButton
} from "@chakra-ui/react"
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  const navMenu = (
    <Breadcrumb color="gray.500">
      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => scrollTo("#portfolio")}>
          Portfolio
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => scrollTo("#about")}>
          About
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => scrollTo("#contact")}>
          Contact
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
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
      </MenuList>
    </Menu>
  )

  return (
    <Stack
      className="container"
      direction="row"
      justify="space-between"
      align="center"
      bg="transparent"
      fontSize="lg"
      fontWeight="bold"
      w="100%"
      pt="4rem"
    >
      <Flex direction="column" lineHeight="1.35rem">
        <Box display={{ base: "none", md: "block" }}>
          <Text fontSize="2xl">tiffanythai.</Text>
          <Text fontSize="lg" color="gray.300">
            Front End Developer
          </Text>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <Text fontSize="2xl">tt.</Text>
        </Box>
      </Flex>

      <Box display={{ base: "none", md: "block" }}>{navMenu}</Box>
      <Box display={{ base: "block", md: "none" }}>{mobileNav}</Box>
    </Stack>
  )
}
