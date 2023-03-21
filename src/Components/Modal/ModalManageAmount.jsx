import { EditIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EditListAmount from "./EditListAmount";
import ShowListAmount from "./ShowListAmount";

export default function ModalManageAmount({
  expenses,
  updateExpense,
  budgetCategory,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const handleToggle = () => setIsEditing(!isEditing);

  function handleSubmit(expensesForm) {
    updateExpense(expensesForm);
    setIsEditing((oldIsEditing) => !oldIsEditing);
  }

  // permet de faire le total d'un array avec la méthode reduce
  const totalExpense = expenses.reduce(
    (previousExpense, currentExpense) =>
      previousExpense + currentExpense.amount,
    0
  );
  console.log(expenses, totalExpense);

  return (
    <>
      <EditIcon boxSize={"5"} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dépenses {budgetCategory}</ModalHeader>
          <ModalCloseButton />
          {isEditing ? (
            <EditListAmount expenses={expenses} handleSubmit={handleSubmit} />
          ) : (
            <ShowListAmount expenses={expenses} handleToggle={handleToggle} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
