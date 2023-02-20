import { MoonIcon, PhoneIcon } from '@chakra-ui/icons'
import { Avatar, Center, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex bgColor={'green'} p={2}>
      <Avatar name='Alex Des' src='https://bit.ly/dan-abramov' />
    <Center>
      <Heading as='h1' size={'xl'}>projectF</Heading>
    </Center>
    <Spacer />
    <Center w='30px' mx={'5'}>
      <MoonIcon />
    </Center>
  </Flex>
  )
}

export default Header