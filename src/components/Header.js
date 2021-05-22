import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import {
  Flex,
  Text,
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
      justify="space-between"
      align="center"
      bg="transparent"
      fontSize="lg"
      fontWeight="bold"
      w="100%"
      pt="4rem"
    >
      <Flex direction="column" lineHeight="1.35rem">
        <Text fontSize="2xl">tiffanythai.</Text>
        <Text fontSize="lg" color="gray.300">
          Front End Developer
        </Text>
      </Flex>
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
    </Stack>
  )
}
