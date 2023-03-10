import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, GridItem } from "@chakra-ui/react";
import MonthSelect from "../Components/MonthSelect";
import BudgetCard from "../Components/BudgetCard";
import { BG_COLOR_PANEL } from "../Utils/utils";

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
              bg={BG_COLOR_PANEL.global}
            >
              <BudgetCard
                name="Global"
                currentAmount={"400"}
                max={"1000"}
                displayCurrentAmount={false}
                displayProgressBar={true}
              ></BudgetCard>
            </GridItem>
            <GridItem
              colStart="2"
              colSpan="2"
              borderRadius="xl"
              p="3"
              bg={BG_COLOR_PANEL.invest}
            >
              <BudgetCard
                name="Investissement"
                currentAmount={"1000"}
                max={"1000"}
                displayCurrentAmount={true}
                displayProgressBar={false}
              ></BudgetCard>
            </GridItem>
            <GridItem
              colSpan="2"
              borderRadius="xl"
              p="3"
              bg={BG_COLOR_PANEL.obligatoire}
            >
              <BudgetCard
                name="Obligatoire"
                currentAmount={"400"}
                max={"1000"}
                displayCurrentAmount={true}
                displayProgressBar={false}
              ></BudgetCard>
            </GridItem>
            <GridItem
              colSpan="2"
              borderRadius="xl"
              p="3"
              bg={BG_COLOR_PANEL.loisir}
            >
              <BudgetCard
                name="Loisir"
                currentAmount={"400"}
                max={"1000"}
                displayProgressBar={true}
                displayCurrentAmount={false}
                bg={BG_COLOR_PANEL.loisir}
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
