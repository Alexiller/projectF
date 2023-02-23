import { MoonIcon } from '@chakra-ui/icons'
import { Progress, Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react'
import React from 'react'

function BaseRevenue() {
  return (
    <Stat>
          <StatLabel fontSize={40}>Argent restant</StatLabel>
          <StatNumber fontSize={30}>1580
            <StatHelpText>
              Budget utilisé = 23.85%
            </StatHelpText>
          </StatNumber>
          <Progress colorScheme='green' h="20" borderRadius={'md'} value={50} hasStripe isAnimated/>
        </Stat>
  )
}

export default BaseRevenue