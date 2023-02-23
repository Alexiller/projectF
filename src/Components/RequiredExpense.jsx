import React from 'react'
import { Center, Progress, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

export default function RequiredExpense() {
  return (
    <Stat>
        <StatLabel fontSize={20}>Obligatoire</StatLabel>
        <Center>
            <StatNumber fontSize='6xl'>{985}€</StatNumber>
        </Center>
    </Stat>
  )
}
