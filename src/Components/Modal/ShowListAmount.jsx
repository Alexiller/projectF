import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function ShowListAmount({ expenses }) {
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
            {expenses.map((expense) => (
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
