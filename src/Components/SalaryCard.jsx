import {
  FormControl,
  GridItem,
  HStack,
  Heading,
  Input,
  Stat,
} from "@chakra-ui/react";

export default function SalaryCard({ salary, setSalary }) {
  function handleChange(e) {
    const { value } = e.target;
    setSalary(value);
    console.log(salary);
  }

  return (
    <GridItem colStart="3" colEnd="7" borderRadius="xl" p="3" bg="yellow.300">
      <Stat>
        <HStack spacing="10">
          <Heading w="20%" fontSize="20">
            Salaire du mois
          </Heading>
          <FormControl isRequired>
            <Input
              _placeholder={{ border: "black", color: "black" }}
              variant="flushed"
              name="salary"
              placeholder="Votre salaire"
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
        </HStack>
      </Stat>
    </GridItem>
  );
}
