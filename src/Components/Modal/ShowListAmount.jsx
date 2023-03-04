import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function ShowListAmount({expensesLists}) {

    return (
      <>
              <TableContainer>
                <Table variant='simple'>
                      <Thead>
                        <Tr>
                            <Th>Catégorie</Th>
                            <Th>Intitulé</Th>
                            <Th isNumeric>Montant</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                      {expensesLists.map((expensesList) =>
                        <> 
                          <Tr>
                            <Td>{expensesList.category}</Td>
                            <Td>{expensesList.name}</Td>
                            <Td>{expensesList.amount}€</Td>
                          </Tr>
                        </>
                       )}
                      </Tbody>
                  </Table>
                </TableContainer>

      </>
    )
  }
