import { EditIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useBoolean, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function ShowListAmount({name}) {
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
                        <Tr textAlign={'center'}>
                            <Th>Catégorie</Th>
                            <Th>Intitulé</Th>
                            <Th>Montant</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                            <Td>
                              <FormControl isRequired>
                                <Input placeholder='Catégorie' defaultValue="Alimentation"/>
                              </FormControl>
                            </Td>
                            <Td>
                              <FormControl isRequired >
                                <Input placeholder='Intitulé' />
                              </FormControl>
                            </Td>
                            <Td isNumeric>
                              <FormControl>
                                <NumberInput>
                                  <NumberInputField />
                                  <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                  </NumberInputStepper>
                                </NumberInput>
                              </FormControl>
                            </Td>
                            <Td></Td>
                            <Td textAlign={'right'}>
                                <Button mx='2'>✏️</Button>
                                <Button>❌</Button>
                            </Td>
                        </Tr>
                      </Tbody>
                  </Table>
                </TableContainer>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
