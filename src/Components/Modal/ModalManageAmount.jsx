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

  const expensesLists = [
    {
      id: 1,
      category: "Alimentation",
      name: "Auchan",
      amount: 85,
    },
    {
      id: 2,
      category: "Santé",
      name: "Pharmacie",
      amount: 20,
    },
    {
      id: 3,
      category: "Loisir",
      name: "Jeux",
      amount: 35,
    },
  ];

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
              <EditListAmount expensesLists={expensesLists} />
            ) : (
              <ShowListAmount expensesLists={expensesLists} />
            )}
          </ModalBody>
          <ModalFooter>
            {isEditing ? (
              <Button colorScheme="green" mr={3} onClick={handleToggle}>
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
