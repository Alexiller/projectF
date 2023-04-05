import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Center, Flex, Heading } from "@chakra-ui/react";
import moment from "moment";
import "moment/locale/fr";
import React, { useState } from "react";

export default function MonthSelect() {
  const [date, setDate] = useState(moment());

  const decreaseMonth = () => {
    setDate((oldDate) => moment(oldDate).subtract(1, "month"));
  };

  const increaseMonth = () => {
    setDate((oldDate) => moment(oldDate).add(1, "month"));
  };

  const dateLabel = date.format("MMMM YYYY");

  return (
    <Flex justifyContent="space-between" color="white">
      <Center>
        <Button onClick={decreaseMonth} colorScheme="white" size="lg">
          <ChevronLeftIcon boxSize={12} />
        </Button>
      </Center>
      <Heading textAlign="center" textTransform="capitalize" fontSize="50">
        {dateLabel}
      </Heading>
      <Center>
        <Button onClick={increaseMonth} colorScheme="white" size="lg">
          <ChevronRightIcon boxSize={12} />
        </Button>
      </Center>
    </Flex>
  );
}
