import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Grid, GridItem } from '@chakra-ui/react'
import BaseRevenue from '../Components/baseRevenue'

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
    <Grid templateColumns='repeat(6, 1fr)' gap={1}>
      <GridItem colSpan="4" colStart="2" colEnd="6" borderRadius="xl" p="3" bg='blue.200'>
         <BaseRevenue/>
      </GridItem>
      <GridItem colStart="2" colSpan="2"  bg='blue.500' />
      <GridItem colSpan="2" bg='blue.500' />
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