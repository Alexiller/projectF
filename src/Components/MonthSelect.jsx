import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { getMonthName } from "../Utils/utils";

export default function MonthSelect() {
  let yearValue = new Date().getFullYear();
  let monthValue = new Date().getMonth() + 1;

  const [month, setMonth] = useState(monthValue);
  const [year, setYear] = useState(yearValue);

  const decreaseMonth = () => {
    setMonth((month) => month - 1);
  };

  const increaseMonth = () => {
    setMonth((month) => month + 1);
  };

  const MonthName = getMonthName(month);
  console.log(month);

  return (
    <Flex justifyContent="space-between" color="white">
      <Center>
        <Button onClick={decreaseMonth} colorScheme="white" size="lg">
          <ChevronLeftIcon boxSize={12} />
        </Button>
      </Center>
      <Heading textAlign={"center"} fontSize="50">
        {" "}
        {MonthName} {yearValue}
      </Heading>
      <Center>
        <Button colorScheme="white" size="lg">
          <ChevronRightIcon onClick={increaseMonth} boxSize={12} />
        </Button>
      </Center>
    </Flex>
  );
}
