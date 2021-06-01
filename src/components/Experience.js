import React, { useState } from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa"

export default function Experience({ exp }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`ecard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
      role="alert"
    >
      <div className="ecard-body">
        <div class="ecard-front">
          <div>
            <Heading size="lg">{exp.title}</Heading>
            <Text
              bg="dark"
              color="light"
              p="0.25rem 0.5rem"
              my="0.5rem"
              fontStyle="italic"
            >
              {exp.company}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {exp.time}
            </Text>
            <Text>{exp.project}</Text>
          </div>
          <Flex justify="flex-end">
            <FaArrowRight />
          </Flex>
        </div>
        <div class="ecard-back">
          <Text fontSize="sm">{exp.description}</Text>
        </div>
      </div>
    </div>
  )
}
