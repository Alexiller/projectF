import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Center, Flex, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

export default function MonthSelect( {month, year}) {
  return (
    <Flex justifyContent="space-between" color="white">
        <Center>
            <Button colorScheme='white' size='lg'>
                <ChevronLeftIcon boxSize={12}/>
            </Button>
        </Center>
        <Heading textAlign={'center'} fontSize="50">{month} {year}</Heading>
        <Center>
        <Button colorScheme='white' size='lg'>
            <ChevronRightIcon boxSize={12}/>
        </Button>
        </Center>
    </Flex>
  )
}
