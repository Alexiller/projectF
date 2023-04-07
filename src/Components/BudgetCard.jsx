import {
  Button,
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
  label,
  bgColor,
  colSpan,
  colStart,
  colEnd,
  displayCurrentAmount,
  displayProgressBar,
  categoryList,
}) {
  const totalExpense = expenses.reduce(
    (previousExpense, currentExpense) =>
      previousExpense + currentExpense.amount,
    0
  );
  // temporaire
  const max = 1000;

  const currentAmountInEuros = currencyFormatter.format(totalExpense);
  const progressAmount = `${currentAmountInEuros} / ${currencyFormatter.format(
    max
  )}`;

  const progressBarColor = getProgressBarVariant(totalExpense, max);
  return (
    <GridItem
      colSpan={colSpan}
      colStart={colStart}
      colEnd={colEnd}
      bgColor={bgColor}
      borderRadius="xl"
      p="3"
    >
      <Stat>
        <HStack justifyContent={"space-between"}>
          <Heading fontSize={20}>{label}</Heading>
          <ModalManageAmount
            budgetCategory={budgetCategory}
            expenses={expenses}
            updateExpense={updateExpense}
            totalExpense={totalExpense}
            categoryList={categoryList}
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
              colorScheme={progressBarColor}
              borderRadius="md"
              min={0}
              max={max}
              value={totalExpense}
              hasStripe
              isAnimated
            />
          </>
        )}
      </Stat>
    </GridItem>
  );
}
