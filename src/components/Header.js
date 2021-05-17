import React from 'react'
import {
  Stack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react"

export default function Header() {
    return (
      <Stack direction="row" justifyContent="space-between" position='fixed'>
        <p>Home</p>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#portfolio">Portfolio</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Stack>
    )
}
