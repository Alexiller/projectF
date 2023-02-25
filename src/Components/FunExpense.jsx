import React from 'react'
import { Heading, HStack, Progress, Stat, StatHelpText} from '@chakra-ui/react'
import ModalFunExpense from './ModalFunExpense'

export default function FunExpense() {
  return (
    <Stat>
    <HStack justifyContent={'space-between'}>
      <Heading fontSize={20}>Loisir</Heading>
      <ModalFunExpense/>
    </HStack>
    <StatHelpText textAlign={'right'}>
    Budget restant à utiliser 999 €
    </StatHelpText>
    <Progress colorScheme='green' h="20" borderRadius={'md'} value={'10'} hasStripe isAnimated/>
  </Stat>
  )
}
