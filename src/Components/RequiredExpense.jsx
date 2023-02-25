import React from 'react'
import { Center, List, ListItem, Stat, StatLabel, StatNumber, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'

export default function RequiredExpense() {
  return (
    <>
    <Stat>
        <StatLabel fontSize={20}>Obligatoire</StatLabel>
        <Center>
            <StatNumber fontSize='6xl'>{985}€</StatNumber>
        </Center>
    </Stat>
    
    </>
  )
}
