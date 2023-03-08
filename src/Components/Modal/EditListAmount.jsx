import { DeleteIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  Input,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CATEGORY_LIST } from "../../Utils/utils";

export default function EditListAmount({
  expenses,
  addExpense,
  setAddExpense,
}) {
  const categoryLists = CATEGORY_LIST.map((categoryList) => (
    <option value={categoryList.value}>{categoryList.label}</option>
  ));

  function handleChange(e) {
    const { name, value } = e.target;
    setAddExpense({ ...addExpense, [name]: value });
  }

  return (
    <>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr textAlign={"center"}>
              <Th>Catégorie</Th>
              <Th>Intitulé</Th>
              <Th>Montant</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses &&
              expenses.map((exp) => (
                <>
                  <Tr>
                    <Td>
                      <FormControl isRequired>
                        <Select
                          name="category"
                          placeholder="Catégorie"
                          defaultValue={exp.category}
                          onChange={(e) => handleChange(e)}
                        >
                          {categoryLists}
                        </Select>
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isRequired>
                        <Input
                          name="name"
                          placeholder="Intitulé"
                          defaultValue={exp.name}
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <FormControl isRequired>
                        <Input
                          name="amount"
                          placeholder="Montant"
                          defaultValue={exp.amount}
                          onChange={(e) => handleChange(e)}
                        />
                      </FormControl>
                    </Td>
                    <Td>
                      <DeleteIcon onClick="" />
                    </Td>
                  </Tr>
                </>
              ))}
            <Tr>
              <Td>
                <FormControl isRequired>
                  <Select
                    name="category"
                    placeholder="Catégorie"
                    defaultValue={addExpense.category}
                    onChange={(e) => handleChange(e)}
                  >
                    {categoryLists}
                  </Select>
                </FormControl>
              </Td>
              <Td>
                <FormControl isRequired>
                  <Input
                    name="name"
                    placeholder="Intitulé"
                    defaultValue={addExpense.name}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Td>
              <Td>
                <FormControl isRequired>
                  <Input
                    name="amount"
                    placeholder="Montant"
                    defaultValue={addExpense.amount}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>
              </Td>
              <Td>
                <DeleteIcon onClick="" />
              </Td>
            </Tr>
          </Tbody>
          <Button onClick="" colorScheme="gray" textAlign={"right"} mr={3}>
            ➕
          </Button>
        </Table>
      </TableContainer>
    </>
  );
}
