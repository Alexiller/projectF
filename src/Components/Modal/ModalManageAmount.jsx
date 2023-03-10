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
import dummyExpenses from "/src/data/expenses.json";

export default function ModalManageAmount({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const handleToggle = () => setIsEditing(!isEditing);

  // permanent, toutes les dépenses
  const [expenses, setExpenses] = useState(dummyExpenses);

  function handleSubmit(expensesForm) {
    setExpenses(expensesForm);
    setIsEditing((oldIsEditing) => !oldIsEditing);
  }

  return (
    <>
      <EditIcon boxSize={"5"} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dépenses {name}</ModalHeader>
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
