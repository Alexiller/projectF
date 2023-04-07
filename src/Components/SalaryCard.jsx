import {
  Center,
  FormControl,
  GridItem,
  HStack,
  Heading,
  Input,
  Stat,
  StatNumber,
} from "@chakra-ui/react";

export default function SalaryCard() {
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
            />
          </FormControl>
        </HStack>
      </Stat>
    </GridItem>
  );
}
