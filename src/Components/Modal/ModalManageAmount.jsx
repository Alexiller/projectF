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
import EditExpensesList from "./EditExpensesList";
import ExpensesList from "./ExpensesList";

export default function ModalManageAmount({
  expenses,
  updateExpense,
  budgetCategory,
  totalExpense,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const handleToggle = () => setIsEditing(!isEditing);

  function handleSubmit(expensesForm) {
    updateExpense(expensesForm);
    setIsEditing((oldIsEditing) => !oldIsEditing);
  }

  // permet de faire le total d'un array avec la méthode reduce

  return (
    <>
      <EditIcon boxSize={"5"} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dépenses {budgetCategory}</ModalHeader>
          <ModalCloseButton />
          {isEditing ? (
            <EditExpensesList expenses={expenses} handleSubmit={handleSubmit} />
          ) : (
            <ExpensesList expenses={expenses} handleToggle={handleToggle} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
