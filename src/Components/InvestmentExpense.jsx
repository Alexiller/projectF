import { CheckIcon } from '@chakra-ui/icons'
import { Center, Heading, Input, InputGroup, InputLeftElement, InputRightElement, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'


export default function InvestmentExpense() {
  return (
    <>
    <Heading fontSize={20}>Investissement</Heading>
    <Center>
            <Text fontSize='6xl'>{}€</Text>
        </Center>

    <InputGroup bg="white">
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='€'
    />
    <Input placeholder='Enter monthly amount' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
  </>
  )
}
