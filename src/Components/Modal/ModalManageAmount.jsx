import { EditIcon } from '@chakra-ui/icons'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalManageAmount({name}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <EditIcon boxSize={'5'} onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Dépenses {name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <TableContainer>
                  <Table variant='simple'>
                      <Thead>
                        <Tr>
                            <Th>Catégorie</Th>
                            <Th>Intitulé</Th>
                            <Th isNumeric>Montant</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                            <Td>---</Td>
                            <Td>--</Td>
                            <Td isNumeric>99€</Td>
                        </Tr>
                      </Tbody>
                  </Table>
                </TableContainer>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='green' mx="5">Add</Button>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
