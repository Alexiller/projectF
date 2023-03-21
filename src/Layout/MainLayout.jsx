import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import MonthSelect from "../Components/MonthSelect";
import BudgetCard from "../Components/BudgetCard";
import { BUDGET_CATEGORYS } from "../Utils/utils";
import dummyExpenses from "/src/data/expenses.json";

function MainLayout() {
  // permanent, toutes les dépenses
  const [expenses, setExpenses] = useState(dummyExpenses);

  // wrapper qui formatte et met à jour les dépenses
  const updateExpense = (form) => {
    // formatte le formulaire correctement
    const formatedForm = form.map((line) => ({
      ...line,
      amount: +line.amount,
    }));

    // mise à jour des dépenses
    setExpenses(formatedForm);
  };

  const BudgetCardList = BUDGET_CATEGORYS.map((budgetCategory) => (
    <GridItem {...budgetCategory} borderRadius="xl" p="3">
      <BudgetCard
        {...budgetCategory}
        expenses={expenses} // plutôt que de tout envoyer ==> il faut filtrer
        updateExpense={updateExpense}
      />
    </GridItem>
  ));

  return (
    <Grid
      templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
      gridTemplateRows="50px 1fr 30px"
      gridTemplateColumns="1fr"
      h="100vh"
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem bg="orange.300" area="header">
        <Header />
      </GridItem>
      <GridItem area="main">
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
      <GridItem bg="blue.300" area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default MainLayout;
