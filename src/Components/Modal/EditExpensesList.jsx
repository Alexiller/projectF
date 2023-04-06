import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  ModalBody,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FooterModal from "./FooterModal";
import EditExpense from "./EditExpense";

export default function EditListAmount({
  expenses,
  onClose,
  handleSubmit,
  categoryList,
}) {
  // vérifie si le expenses est vide, si vide alors ajout d'une ligne sinon return expenses
  const initialExpenses =
    expenses.length === 0
      ? [{ id: Date.now(), name: "", category: "", amount: 0 }]
      : expenses;

  //ce usestate va prendre comme valeur initiale, la valeur de expenses (liste des expenses)
  const [expensesForm, setExpensesForm] = useState(initialExpenses);

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
        return expense; //si ce n'est pas le cas alors on retourne la ligne non modifié de expense
      });
    });
  }

  function addExpense() {
    setExpensesForm((oldExpensesForm) => [
      ...oldExpensesForm,
      {
        id: Date.now(),
        category: "",
        amount: undefined,
        name: "",
      },
    ]);
  }

  // TODO : désactiver le bouton si plus qu'une ligne d'édition
  function deleteExpense(id) {
    setExpensesForm((oldExpensesForm) =>
      oldExpensesForm.map((expense) => {
        if (expense.id === id) {
          return { ...expense, isDeleted: true };
        }
        return expense;
      })
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
              {expensesForm
                .filter((expense) => !expense.isDeleted)
                .map((expense) => (
                  <EditExpense
                    expense={expense}
                    categoryList={categoryList}
                    handleChange={handleChange}
                    deleteExpense={deleteExpense}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>

        <Button onClick={addExpense} colorScheme="gray" mt={3}>
          Ajouter une ligne
        </Button>
      </ModalBody>
      <FooterModal
        label="Valider"
        color="green"
        onClose={onClose}
        onClick={() => handleSubmit(expensesForm)}
      />
    </>
  );
}
