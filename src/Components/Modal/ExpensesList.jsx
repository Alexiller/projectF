import {
  ModalBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import FooterModal from "./FooterModal";
import { EXPENSE_CATEGORY_LIST } from "../../models/budgetAndExpense";

export default function ShowListAmount({ expenses, onClose, handleToggle }) {
  return (
    <>
      <ModalBody>
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
                <Tr key={expense.id}>
                  <Td>
                    {
                      EXPENSE_CATEGORY_LIST.find(
                        (category) => category.value === expense.category
                      ).label
                    }
                  </Td>
                  <Td>{expense.name}</Td>
                  <Td>{expense.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </ModalBody>
      <FooterModal
        label="Editer"
        color="yellow"
        onClick={handleToggle}
        onClose={onClose}
      />
    </>
  );
}
