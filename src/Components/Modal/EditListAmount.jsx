import { Button, FormControl, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function EditListAmount({expensesLists}) {

  

    return (
      <>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr textAlign={'center'}>
                  <Th>Catégorie</Th>
                  <Th>Intitulé</Th>
                  <Th>Montant</Th>
                </Tr>
              </Thead>
              <Tbody>
       {expensesLists.map((expensesList) =>
       <> 
              <Tr>
                <Td>                              
                  <FormControl isRequired>
                    <Input placeholder='Catégorie' defaultValue={expensesList.category}/>
                  </FormControl>
                </Td>
                <Td>                  
                  <FormControl isRequired>
                    <Input placeholder='Intitulé' defaultValue={expensesList.name}/>
                  </FormControl>
                </Td>
                <Td>                  
                  <FormControl isRequired>
                    <Input placeholder='Montant' defaultValue={expensesList.amount}/>
                  </FormControl>
                  </Td>
              </Tr>
               </>
            )}
                      </Tbody>
                      <Button colorScheme='gray' textAlign={'right'} mr={3}>➕</Button>
                  </Table>
                </TableContainer>
                
      </>
    )
  }
