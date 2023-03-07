import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

export default function ShowListAmount({ expensesLists }) {
  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Catégorie</Th>
              <Th>Intitulé</Th>
              <Th isNumeric>Montant</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expensesLists.map((expense) => (
              <>
                <Tr>
                  <Td>{expense.category}</Td>
                  <Td>{expense.name}</Td>
                  <Td>{expense.amount}</Td>
                </Tr>
              </>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}
