import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import EditListAmount from "./EditListAmount";
import ShowListAmount from "./ShowListAmount";

export default function ModalManageAmount({ name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setIsEditing] = useState(false);
  const handleToggle = () => setIsEditing(!isEditing);

  const [expenses, setExpenses] = useState([]);
  const [addExpense, setAddExpense] = useState({
    category: "",
    name: "",
    amount: null,
  });

  function handleAddExpense(addExpense) {
    setExpenses((prevExpenses) => [...prevExpenses, addExpense]);
  }
  console.log(expenses);

  function handleSubmit(e) {
    e.preventDefault();
    handleAddExpense(addExpense);
    setIsEditing((oldIsEditing) => !oldIsEditing);
  }

  // console.log(expenses);

  return (
    <>
      <EditIcon boxSize={"5"} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dépenses {name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isEditing ? (
              <EditListAmount
                expenses={expenses}
                addExpense={addExpense}
                setAddExpense={setAddExpense}
                handleAddLineExpense={handleAddExpense}
              />
            ) : (
              <ShowListAmount expenses={expenses} />
            )}
          </ModalBody>
          <ModalFooter>
            {isEditing ? (
              <Button colorScheme="green" mr={3} onClick={handleSubmit}>
                Valider
              </Button>
            ) : (
              <Button colorScheme="yellow" mr={3} onClick={handleToggle}>
                Edit
              </Button>
            )}
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
