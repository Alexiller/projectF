import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import BaseRevenue from '../Components/BaseRevenue'
import FunExpense from '../Components/FunExpense'
import RequiredExpense from '../Components/RequiredExpense'
import InvestmentExpense from '../Components/InvestmentExpense'

function MainLayout() {
  return (
    <>
    
<Grid
  templateAreas={`"header header"
                  "main main"
                  "footer footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'1fr'}
  h='100vh'
  gap='1'
  color='blackAlpha.700'
>
  <GridItem bg='orange.300' area={'header'}>
  <Header />
  </GridItem>
  <GridItem area={'main'}>
    <Grid templateColumns='repeat(8, 1fr)' gap={1}>
    <GridItem colSpan="4" colStart="2" colEnd="8" borderRadius="xl" p="3" bg='red.300'>
         <Heading textAlign={'center'} fontSize="50" color={'white'}>Février 2023</Heading>
      </GridItem>
      <GridItem colSpan="4" colStart="2" colEnd="8" borderRadius="xl" p="3" bg='purple.200'>
         <BaseRevenue/>
      </GridItem>
      <GridItem colStart="2" colSpan="2"  borderRadius="xl" p="3" bg='blue.200'>
        <InvestmentExpense/>
      </GridItem>
      <GridItem colSpan="2"  borderRadius="xl" p="3" bg='orange.200'>
        <RequiredExpense/>
      </GridItem>
      <GridItem colSpan="2"  borderRadius="xl" p="3" bg='green.200'>
        <FunExpense/>
      </GridItem>
     </Grid>
  </GridItem>
  <GridItem bg='blue.300' area={'footer'}>
    <Footer />
  </GridItem>
</Grid>


    </>
  )
}

export default MainLayout