import { Avatar, Center, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex bgColor={'green'} p={2}>
    <Center>
      <Heading as='h1' size={'xl'}>projectF</Heading>
    </Center>
    <Spacer />
    <Avatar name='Alex Des' src='https://bit.ly/dan-abramov' />
  </Flex>
  )
}

export default Header