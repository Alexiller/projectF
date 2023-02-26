import { EditIcon } from '@chakra-ui/icons'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalRequiredExpense() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
          <EditIcon boxSize={'5'} onClick={onOpen}/>
    
          <Modal isOpen={isOpen} onClose={onClose} size="4xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Dépenses obligatoire</ModalHeader>
              <ModalCloseButton />
              <ModalBody>

              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='green' mx="5">Ajouter une dépense</Button>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
    )
  }
  