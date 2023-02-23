import React from 'react'
import { Progress, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

export default function FunExpense() {
  return (
    <Stat>
    <StatLabel fontSize={20}>Loisir</StatLabel>
    <StatHelpText textAlign={'right'}>
    Budget restant à utiliser 999 €
    </StatHelpText>
    <Progress colorScheme='green' h="20" borderRadius={'md'} value={'10'} hasStripe isAnimated/>
  </Stat>
  )
}
