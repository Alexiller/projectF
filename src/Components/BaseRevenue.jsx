import React from 'react'
import { Center, Heading, Progress, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'

export default function BaseRevenue() {

    const salary = 2000;
    const budgetRemaining = (salary - 1000);
    const remainingPercentage = 60;
  return (
    <Stat>
      <Heading fontSize={20}>Global</Heading>
      
            <Center><StatNumber fontSize='4xl'>{985}€</StatNumber></Center>
      <StatHelpText textAlign={'right'}>
        Budget utilisé à {remainingPercentage}%
      </StatHelpText>
      <Progress colorScheme='green' h="20" borderRadius={'md'} value={remainingPercentage} hasStripe isAnimated/>
    </Stat>
  )
}