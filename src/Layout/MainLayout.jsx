import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import MonthSelect from "../Components/MonthSelect";
import BudgetCard from "../Components/BudgetCard";

function MainLayout() {
  return (
    <>
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
            <GridItem
              colSpan="4"
              colStart="2"
              colEnd="8"
              borderRadius="xl"
              p="3"
              bg="purple.200"
            >
              <BudgetCard
                name="Global"
                currentAmount={"400"}
                max={"1000"}
                displayProgressBar={true}
              ></BudgetCard>
            </GridItem>
            <GridItem
              colStart="2"
              colSpan="2"
              borderRadius="xl"
              p="3"
              bg="blue.200"
            >
              <BudgetCard
                name="Investissement"
                currentAmount={"1000"}
                max={"1000"}
                displayCurrentAmount={true}
              ></BudgetCard>
            </GridItem>
            <GridItem colSpan="2" borderRadius="xl" p="3" bg="orange.200">
              <BudgetCard
                name="Obligatoire"
                currentAmount={"400"}
                max={"1000"}
                displayCurrentAmount={true}
              ></BudgetCard>
            </GridItem>
            <GridItem colSpan="2" borderRadius="xl" p="3" bg="green.200">
              <BudgetCard
                name="Loisir"
                currentAmount={"400"}
                max={"1000"}
                displayProgressBar={true}
                displayCurrentAmount={false}
              ></BudgetCard>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="blue.300" area={"footer"}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default MainLayout;
