import {
  Center,
  GridItem,
  Heading,
  HStack,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
import { currencyFormatter, getProgressBarVariant } from "../utils/utils";
import React from "react";
import ModalManageAmount from "./Modal/ModalManageAmount";

export default function BudgetCard({
  expenses,
  updateExpense,
  budgetCategory,
  currentAmount,
  max,
  displayCurrentAmount,
  displayProgressBar,
  bgColor,
  colSpan,
  colStart,
  colEnd,
}) {
  const currentAmountInEuros = currencyFormatter.format(currentAmount);
  const progressAmount = `${currentAmountInEuros} / ${currencyFormatter.format(
    max
  )}`;

  return (
    <GridItem
      colSpan="2"
      colStart="8"
      colEnd="2"
      bgColor="purple.200"
      borderRadius="xl"
      p="3"
    >
      <Stat>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={20}>{budgetCategory}</Heading>
          <ModalManageAmount
            budgetCategory={budgetCategory}
            expenses={expenses}
            updateExpense={updateExpense}
          />
        </HStack>
        {displayCurrentAmount && (
          <Center>
            <StatNumber fontSize="6xl">{currentAmountInEuros}</StatNumber>
          </Center>
        )}
        {displayProgressBar && (
          <>
            <StatHelpText textAlign="right">{progressAmount}</StatHelpText>
            <Progress
              h="20"
              colorScheme={getProgressBarVariant(currentAmount, max)}
              borderRadius="md"
              min={0}
              max={max}
              value={currentAmount}
              hasStripe
              isAnimated
            />
          </>
        )}
      </Stat>
    </GridItem>
  );
}
