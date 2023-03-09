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

export default function EditListAmount({ expenses, handleSubmit }) {
  const categoryLists = CATEGORY_LIST.map((categoryList) => (
    <option key={categoryList.value} value={categoryList.value}>
      {categoryList.label}
    </option>
  ));

  //ce usestate va prendre comme valeur initiale, la valeur de expenses (liste des expenses)
  const [expensesForm, setExpensesForm] = useState(expenses);

  // fonction permettant de modifier la ligne du formulaire
  function handleChange(e, id) {
    const { name: fieldName, value: fieldValue } = e.target;
    setExpensesForm((oldExpensesForm) => {
      // le map parcours chaque élément du tableau
      return oldExpensesForm.map((expense) => {
        // vérification que l'expense id est égale à la ligne de l'id
        if (expense.id === id) {
          // si c'est le cas, on écrase seuelement la valeur modifié sur la ligne
          return {
            ...expense, // ...expense --> {id,category,name, amount}
            [fieldName]: fieldValue,
          };
        }
        return expense; //si ce n'est pas le cas alors on retourne les valeurs non modifié de expense
      });
    });
  }

  function addExpense() {
    setExpensesForm((oldExpensesForm) => [
      ...oldExpensesForm,
      {
        id: Date.now(),
        category: "sante",
        amount: 20,
        name: "blabla",
      },
    ]);
  }

  function deleteExpense(id) {
    setExpensesForm((oldExpensesForm) =>
      oldExpensesForm.filter((expense) => expense.id != id)
    );
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
              {expensesForm.map((expense) => (
                <Tr key={expense.id}>
                  <Td>
                    <FormControl isRequired>
                      <Select
                        name="category"
                        placeholder="Catégorie"
                        value={expense.category}
                        onChange={(e) => handleChange(e, expense.id)}
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
                        value={expense.name}
                        onChange={(e) => handleChange(e, expense.id)}
                      />
                    </FormControl>
                  </Td>
                  <Td>
                    <FormControl isRequired>
                      <Input
                        name="amount"
                        placeholder="Montant"
                        value={expense.amount}
                        onChange={(e) => handleChange(e, expense.id)}
                      />
                    </FormControl>
                  </Td>
                  <Td>
                    <DeleteIcon onClick={() => deleteExpense(expense.id)} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
          <Button
            onClick={addExpense}
            colorScheme="gray"
            textAlign={"right"}
            mr={3}
          >
            ➕
          </Button>
        </TableContainer>
      </ModalBody>
      <FooterModal label="Valider" color="green" onClick={handleSubmit} />
    </>
  );
}
