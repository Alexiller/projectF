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
  const [expenses, setExpenses] = useState([]);

  const handleToggle = () => setIsEditing(!isEditing);

  const handleDelete = (id) => {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  };

  const handleAddItem = () => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        id: Date.now(),
        category: "",
        name: "",
        amount: null,
      },
    ]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        [name]: value,
      },
    ]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing((oldIsEditing) => !oldIsEditing);
  }

  console.log(expenses);

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
                expensesLists={expenses}
                setExpenses={setExpenses}
                handleAddItem={handleAddItem}
                handleDelete={handleDelete}
                handleChange={handleChange}
              />
            ) : (
              <ShowListAmount expensesLists={expenses} />
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
