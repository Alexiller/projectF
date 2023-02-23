import { CheckIcon } from '@chakra-ui/icons'
import { Center, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import React from 'react'


export default function InvestmentExpense() {
  return (
    <>
    <Text fontSize={20} pb="5">Investissement</Text>

    <InputGroup bg="white">
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='$'
    />
    <Input placeholder='Enter monthly amount' />
    <InputRightElement children={<CheckIcon color='green.500' />} />
  </InputGroup>
  </>
  )
}
