import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  ModalBody,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CATEGORY_LIST } from "../../Utils/utils";
import FooterModal from "./FooterModal";

export default function EditListAmount({
  expenses,
  handleSubmit
}) {
  const categoryLists = CATEGORY_LIST.map((categoryList) => (
    <option key={categoryList.value} value={categoryList.value}>{categoryList.label}</option>
  ));

  const [expensesForm, setExpensesForm] = useState(expenses);

  function handleChange(e, id) {
    const { name: fieldName, value: fieldValue } = e.target;
    setExpensesForm((oldExpensesForm) => {
      return oldExpensesForm.map((expense) => {
        if (expense.id === id) {
          return {            
            ...expense,
            [fieldName]: fieldValue,
          }
        }
        return expense;
      })
    })
  }

  return (
    <>
      <ModalBody>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr textAlign={"center"}>
                <Th>Catégorie</Th>
                <Th>Intitulé</Th>
                <Th>Montant</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expensesForm.map((exp) => (
                    <Tr key={exp.id}>
                      <Td>
                        <FormControl isRequired>
                          <Select
                            name="category"
                            placeholder="Catégorie"
                            value={exp.category}
                            onChange={(e) => handleChange(e, exp.id)}
                          >
                            {categoryLists}
                          </Select>
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isRequired>
                          <Input
                            name="name"
                            placeholder="Intitulé"
                            value={exp.name}
                            onChange={(e) => handleChange(e, exp.id)}
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <FormControl isRequired>
                          <Input
                            name="amount"
                            placeholder="Montant"
                            value={exp.amount}
                            onChange={(e) => handleChange(e, exp.id)}
                          />
                        </FormControl>
                      </Td>
                      <Td>
                        <DeleteIcon />
                      </Td>
                    </Tr>
                ))}
            </Tbody>
          </Table>
          <Button colorScheme="gray" textAlign={"right"} mr={3}>
              ➕
            </Button>
        </TableContainer>
      </ModalBody>
      <FooterModal label="Valider" color="green" onClick={handleSubmit}/>
    </>
  );
}
