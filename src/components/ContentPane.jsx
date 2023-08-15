import React from 'react';
import {
  useBreakpointValue,
  Box,
  Flex,
  Heading,
  StackDivider,
  Text,
  VStack
} from '@chakra-ui/react';
import Questions from '../data/Questions';
import InitiativeCard from './InitiativeCard';
import FormattedText from './FormattedText';

export default function ContentPane({question, ...props}) {
  const contentTitle = useBreakpointValue({ lg: Questions.get(question).question, base: Questions.get(question).title})
  const initiatives = Questions.get(question).act.initiatives;
  return (
    <VStack
      divider={<StackDivider borderWidth='2px' borderColor='WhiteAlpha.700' />}
      spacing={4}
      p={4}
      bg='WhiteAlpha.100'
      {...props}
    >
      <Flex justifyContent='center' w='100%'>
        <Heading size='lg'>{contentTitle}</Heading>
      </Flex>
      <Flex
        h='100%'
        w='100%'
        gap='10px'
        direction='column'
        overflow='auto'
        alignItems='center'
      >
        <Box maxW='6xl' px='60px'>
          <Box pb='2em'>
            <FormattedText textArray={Questions.get(question).description} />
          </Box>

          <Box
            maxW='3xl' 
            margin="auto"
            mb='1em'
          >
            <Heading as='h2' size='lg' mb='0.1em'>
              Good Stuff To Check Out
            </Heading>
            <Text fontSize='sm' mb='1em'>
              We've noticed these movers and shakers working on solutions.
            </Text>
            <Flex
              direction="column"
              gap="10px"
            >
              {initiatives.map((item, index) =>
                <InitiativeCard
                  key={item.title}
                  initiative={item}
                  flip={index%2===0}
                />
              )}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </VStack>
  )
}