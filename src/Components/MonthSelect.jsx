import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { getMonthName } from "../Utils/utils";

function shiftMonth(month, offset) {
  return ((month - 1 + (offset % 12) + 12) % 12) + 1;
}

export default function MonthSelect() {
  let yearValue = new Date().getFullYear();
  let monthValue = new Date().getMonth() + 1;

  const [date, setDate] = useState({
    month: monthValue,
    year: 2023,
  });

  // date.month = 1 --> year - 1
  // date.month = 12 --> year + 1

  const decreaseMonth = () => {
    setDate((oldDate) => {
      const newMonth = shiftMonth(oldDate.month, -1);
      return {
        ...oldDate,
        month: newMonth,
      };
    });
  };

  const increaseMonth = () => {
    setDate((oldDate) => ({
      ...oldDate,
      month: shiftMonth(oldDate.month, 1),
    }));
  };

  const MonthName = getMonthName(date.month);
  console.log(date);

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
