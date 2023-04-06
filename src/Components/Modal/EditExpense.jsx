import { DeleteIcon } from "@chakra-ui/icons";
import { Button, FormControl, Input, Select, Td, Tr } from "@chakra-ui/react";
import React from "react";

export default function EditExpense({
  expense,
  categoryList,
  handleChange,
  deleteExpense,
}) {
  const categoryLists = categoryList.map((categoryList) => (
    <option key={categoryList.value} value={categoryList.value}>
      {categoryList.label}
    </option>
  ));
  return (
    <Tr>
      <Td>
        <FormControl isRequired>
          <Select
            name="category"
            value={expense.category}
            onChange={(e) => handleChange(e, expense.id)}
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
            value={expense.name}
            onChange={(e) => handleChange(e, expense.id)}
          />
        </FormControl>
      </Td>
      <Td>
        <FormControl isRequired>
          <Input
            name="amount"
            placeholder="Montant"
            value={expense.amount}
            onChange={(e) => handleChange(e, expense.id)}
          />
        </FormControl>
      </Td>
      <Td>
        <Button onClick={() => deleteExpense(expense.id)} colorScheme="red">
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
}
