import { EditIcon } from '@chakra-ui/icons'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ModalInvestmentExpense() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <EditIcon boxSize={'5'} onClick={onOpen}/>
  
        <Modal isOpen={isOpen} onClose={onClose} size="4xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Investissement</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Catégorie</Th>
                        <Th isNumeric>Montant</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>EFT</Td>
                        <Td isNumeric>20€</Td>
                    </Tr>
                    <Tr>
                        <Td>AV</Td>
                        <Td isNumeric>15.50€</Td>
                    </Tr>
                    </Tbody>
                </Table>
                </TableContainer>
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
