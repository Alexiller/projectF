import {
  Center,
  Heading,
  HStack,
  Progress,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
import { currencyFormatter, getProgressBarVariant } from "../Utils/utils";
import React from "react";
import ModalManageAmount from "./Modal/ModalManageAmount";

export default function BudgetCard({
  budgetCategory,
  currentAmount,
  max,
  displayCurrentAmount,
  displayProgressBar,
}) {
  return (
    <Stat>
      <HStack justifyContent={"space-between"}>
        <Heading fontSize={20}>{budgetCategory}</Heading>
        <ModalManageAmount budgetCategory={budgetCategory} />
      </HStack>
      {displayCurrentAmount ? (
        <Center>
          <StatNumber fontSize="6xl">{currentAmount}€</StatNumber>
        </Center>
      ) : null}
      {displayProgressBar ? (
        <>
          <StatHelpText textAlign={"right"}>
            {currencyFormatter.format(currentAmount)} /{" "}
            {currencyFormatter.format(max)}
          </StatHelpText>
          <Progress
            h="20"
            colorScheme={getProgressBarVariant(currentAmount, max)}
            borderRadius={"md"}
            min={0}
            max={max}
            value={currentAmount}
            hasStripe
            isAnimated
          />
        </>
      ) : null}
    </Stat>
  );
}
