import React from 'react'
import { Center, Heading, HStack, Stat, StatNumber } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

export default function RequiredExpense() {
  return (
    <>
    <Stat>
    <HStack justifyContent={'space-between'}>
      <Heading fontSize={20}>Obligatoire</Heading>
      <EditIcon boxSize={'5'}/>
    </HStack>
        <Center>
            <StatNumber fontSize='6xl'>{985}€</StatNumber>
        </Center>
    </Stat>
    
    </>
  )
}
