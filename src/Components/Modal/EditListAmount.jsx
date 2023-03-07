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
import React from "react";
import { CATEGORY_LIST } from "../../Utils/utils";

export default function EditListAmount({
  expensesLists,
  handleDelete,
  handleAddItem,
  handleChange,
}) {
  const categoryLists = CATEGORY_LIST.map((categoryList) => (
    <option value={categoryList.value}>{categoryList.label}</option>
  ));

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
            {expensesLists.map((expense) => (
              <>
                <Tr>
                  <Td>
                    <FormControl isRequired>
                      <Select
                        name="category"
                        placeholder="Catégorie"
                        defaultValue={expense.category}
                        onChange={handleChange}
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
                        defaultValue={expense.name}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Td>
                  <Td>
                    <FormControl isRequired>
                      <Input
                        name="montant"
                        placeholder="Montant"
                        defaultValue={expense.amount}
                        onChange={handleChange}
                      />
                    </FormControl>
                  </Td>
                  <Td>
                    <DeleteIcon onClick={() => handleDelete(expense.id)} />
                  </Td>
                </Tr>
              </>
            ))}
          </Tbody>
          <Button
            onClick={() => handleAddItem()}
            colorScheme="gray"
            textAlign={"right"}
            mr={3}
          >
            ➕
          </Button>
        </Table>
      </TableContainer>
    </>
  );
}
