import { DeleteIcon } from '@chakra-ui/icons';
import { Button, FormControl, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function EditListAmount({expensesLists}) {
 
 
  const [expenses, setExpenses] = useState(expensesLists);


  const handleDelete = (id) => {
    setExpenses(prevExpenses => {
      return prevExpenses.filter(expense => expense.id !== id)
    })
  }

  const handleUpdate = () => {
    setExpenses(prevExpenses => [...prevExpenses, {
      id: expenses.length,
      category: "",
      name: "",
      amount: null,
  }])
  }
  
  

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
       {expenses.map((expense) =>
       <> 
              <Tr>
                <Td>                              
                  <FormControl isRequired>
                    <Input placeholder='Catégorie' defaultValue={expense.category}/>
                  </FormControl>
                </Td>
                <Td>                  
                  <FormControl isRequired>
                    <Input placeholder='Intitulé' defaultValue={expense.name}/>
                  </FormControl>
                </Td>
                <Td>                  
                  <FormControl isRequired>
                    <Input placeholder='Montant' defaultValue={expense.amount}/>
                  </FormControl>
                </Td>
                <Td>                  
                 <DeleteIcon onClick={() => handleDelete(expense.id)}/>
                </Td>
              </Tr>
               </>
            )}
                      </Tbody>
                      <Button onClick ={() => handleUpdate()}colorScheme='gray' textAlign={'right'} mr={3}>➕</Button>
                  </Table>
                </TableContainer>
                
      </>
    )
  }
