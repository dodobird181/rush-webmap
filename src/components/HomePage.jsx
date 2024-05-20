import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa6";
import NavBar from './NavBar'
import { AboutPageBody, AboutPageSubTitle, AboutPageTitle, AboutPageButtonLabel } from '../data/TextContent';

export default function HomePage() {
  return (
    <Flex direction='column' minH='100vh'>
      <NavBar
        flex='0'
        position='sticky'
        top='0px'
        zIndex='10'
        boxShadow='0px 0px 8px 2px #888'
        getShareURL={() => 'https://whatstherush.ca'}
      />
      <Flex
        flex='1'
        direction='row'
        justifyContent='center'
        alignItems='center'
        backgroundImage={require('../images/RUSH_map_image.jpg')}
        backgroundSize='cover'
      >
        <Box
          bgColor='white'
          borderRadius='xl'
          marginTop='1.5rem'
          marginBottom={{base: '20.5rem', md: '1.5rem'}}
          marginStart='0.5rem'
          marginEnd={{base: '0.5rem', md:'13rem', lg: '16.5rem'}}
          padding='1.5rem'
          paddingBottom='0.5rem'
          maxWidth={{base: '34ch', lg: '45ch', xl: '55ch', '2xl': '65ch'}}
        >
          <Text
            fontFamily='var(--chakra-fonts-title)'
            fontSize={['1.5rem', '2.75rem', null, '2.5rem', '3.125rem', '3.5rem']}
            lineHeight={['2rem', '3.25rem', null, '2.75rem', '3.5rem', '3.75rem']}
            fontWeight='bold'
            marginTop={['0.25rem', '0.75rem', null, null, '1.0rem', '1.5rem']}
          >
            {AboutPageTitle}
          </Text>
          <Text
            fontFamily='var(--chakra-fonts-subHeading)'
            fontSize={['1rem', '1.125rem', null, null, '1.375rem', '1.5rem']}
            fontWeight='500'
            color='rgba(0,0,0,0.6)'
            marginBottom='1rem'
          >
            {AboutPageSubTitle}
          </Text>
          {
            AboutPageBody.map((p) => (
              <Text
                fontFamily='var(--chakra-fonts-body)'
                fontSize={['0.875rem', null, null, null, '1rem', '1.125rem']}
                fontWeight='500'
                color='rgba(0,0,0,0.6)'
                marginTop={['0.5rem']}
              >
                {p}
              </Text>
            ))
          }
          <Flex direction='row' justifyContent='center'>
            <Link to='/app'>
              <Button
                marginY={['1.5rem', null, '2rem', null, null, null]}
                colorScheme='green'
                rightIcon={<FaArrowRight />}
              >
                {AboutPageButtonLabel}
              </Button>
            </Link>
          </Flex>
        </Box>
        <Box
          position='absolute'
          bottom='0'
          right='0'
          height={['22rem', null, '24.5rem', null, '22rem', null]}
          width={['20.5rem', null, '18rem', null, '20.5rem', null]}
          overflow='hidden'
          zIndex='9'
          background={'url("' + require('../images/GrizzlyBear.png') + '")'}
          backgroundSize='20rem 20rem'
          backgroundPosition='bottom -2rem right -2rem'
          backgroundRepeat='no-repeat !important'
        >
          <Box
            position='absolute'
            bottom={['12rem', null, '14.5rem', null, '12rem', null]}
            right={['10.5rem', null, '0.25rem', null, '10.5rem', null]}
            background="url('/SpeechBubble.svg')"
            backgroundPosition='center'
            backgroundRepeat='no-repeat !important'
            backgroundSize='100% 100%'
            margin='0 auto'
            textAlign='center'
            lineHeight='1'
            boxSize='10rem'
            paddingTop='1.375rem'
            paddingBottom='4.75rem'
            paddingX='1rem'
            transform={['none', null, 'scaleX(-1)', null, 'none', null]}
          >
            <Box transform={['none', null, 'scaleX(-1)', null, 'none', null]}>
              Find your question and explore the map!
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  )
}