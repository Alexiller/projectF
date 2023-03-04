import { EditIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useBoolean, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import EditListAmount from './EditListAmount'
import ShowListAmount from './ShowListAmount'

export default function ModalManageAmount({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [edit, setEdit] = useBoolean()

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
      }
    ]

    const [expenses, setExpenses] = useState({expensesLists});

    return (
      <>
        <EditIcon boxSize={'5'} onClick={onOpen}/>
  

        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dépenses {name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {edit ?
              <EditListAmount expensesLists={expensesLists}/>
              : <ShowListAmount expensesLists={expensesLists} />
            }
            </ModalBody>
            <ModalFooter>
            {edit ?
            <Button colorScheme='green' mr={3} onClick={setEdit.toggle}>
                 Valider
              </Button> : 
              <Button colorScheme='yellow' mr={3} onClick={setEdit.toggle}>
              Edit
              </Button>

}
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }