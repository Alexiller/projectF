import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import { getMonthName } from "../Utils/utils";

function shiftMonth(month, offset) {
  return ((month - 1 + (offset % 12) + 12) % 12) + 1;
}

function pastYear(month, year) {
  return month === 1 ? year - 1 : year;
}

function nextYear(month, year) {
  return month === 12 ? year + 1 : year;
}

export default function MonthSelect() {
  let monthValue = new Date().getMonth() + 1;

  const [date, setDate] = useState({
    month: monthValue,
    year: 2023,
  });

  const decreaseMonth = () => {
    setDate((oldDate) => {
      const newMonth = shiftMonth(oldDate.month, -1);
      const newYear = pastYear(oldDate.month, oldDate.year);
      return {
        ...oldDate,
        month: newMonth,
        year: newYear,
      };
    });
  };

  console.log("year after state", date.year);

  const increaseMonth = () => {
    setDate((oldDate) => {
      const newMonth = shiftMonth(oldDate.month, 1);
      const newYear = nextYear(oldDate.month, oldDate.year);
      return {
        ...oldDate,
        month: newMonth,
        year: newYear,
      };
    });
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
        {MonthName} {date.year}
      </Heading>
      <Center>
        <Button colorScheme="white" size="lg">
          <ChevronRightIcon onClick={increaseMonth} boxSize={12} />
        </Button>
      </Center>
    </Flex>
  );
}
