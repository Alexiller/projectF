import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import MonthSelect from "../Components/MonthSelect";
import BudgetCard from "../Components/BudgetCard";
import { BG_COLOR_PANEL, BUDGET_CATEGORYS } from "../Utils/utils";

function MainLayout() {



  const BudgetCardList = BUDGET_CATEGORYS.map((budgetCategory) => (
    <GridItem
    colSpan={budgetCategory.colSpan}
    colStart={budgetCategory.colStart}
    colEnd={budgetCategory.colEnd}
    borderRadius="xl"
    p="3"
    bg={budgetCategory.bgColor}
  >
    <BudgetCard
  name={budgetCategory.name}
  currentAmount={budgetCategory.currentAmount}
  max={budgetCategory.max}
  displayCurrentAmount={budgetCategory.displayCurrentAmount}
  displayProgressBar={budgetCategory.displayProgressBar}
/>
  </GridItem>
  ));


  return (
      <Grid
        templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
      >
        <GridItem bg="orange.300" area={"header"}>
          <Header />
        </GridItem>
        <GridItem area={"main"}>
          <Grid templateColumns="repeat(8, 1fr)" gap={1}>
            <GridItem
              colSpan="4"
              colStart="2"
              colEnd="8"
              borderRadius="xl"
              p="3"
              bg="red.300"
            >
              <MonthSelect />
            </GridItem>
            {BudgetCardList}
          </Grid>
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
  );
}

export default MainLayout;
