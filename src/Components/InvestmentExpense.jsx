import { Center, Heading, HStack, Input, InputGroup, InputLeftElement, InputRightElement, Stat, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'
import ModalInvestmentExpense from './Modal/ModalInvestmentExpense'


export default function InvestmentExpense() {
  return (
    <>
    <Stat>
    <HStack justifyContent={'space-between'} pb="2">
      <Heading fontSize={20}>Investissement</Heading>
      <ModalInvestmentExpense/>
    </HStack>
        <Center>
            <StatNumber fontSize='6xl'>{985}€</StatNumber>
        </Center>
    </Stat>


  </>
  )
}
