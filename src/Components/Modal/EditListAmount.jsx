import { EditIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Stack, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useBoolean, useDisclosure } from '@chakra-ui/react'
import React from 'react'

export default function EditListAmount({name}) {
    const [editList, setEditList] = useBoolean()


    return (
      <>
       
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
          
      </>
    )
  }
