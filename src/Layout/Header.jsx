import { Avatar, Center, Heading, HStack } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
      <HStack spacing="5">
        <Avatar name="Alex Des" src="https://bit.ly/dan-abramov" />
        <Center>
          <Heading as="h1" size="xl">
            projectF
          </Heading>
        </Center>
      </HStack>
  );
}

export default Header;
