import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

export default function Header() {
  return (
    <Stack
      className="container"
      direction="row"
      justifyContent="space-between"
      position="fixed"
      bg="light"
      fontSize="lg"
      fontWeight="bold"
      w="100%"
      pt="4rem"
    >
      <p>T.Tiffany</p>
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => scrollTo('#portfolio')}>Portfolio</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => scrollTo('#about')}>About</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink onClick={() => scrollTo('#contact')}>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Stack>
  )
}
