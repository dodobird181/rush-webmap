import React from 'react';
import { Link as ReactLink } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Link,
  Spacer,
  useBreakpointValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import { FiInstagram, FiMessageSquare, FiMap } from 'react-icons/fi';
import ShareModalButton from './ShareModalButton';

export default function NavBar(props) {
  const styles = useMultiStyleConfig('NavBar');
  const { getShareURL, ...rest } = props;

  const pageTitle = useBreakpointValue({
    base: '[RUSH]',
    xl: '[RUSH] Resilient Urban Systems & Habitat',
  },{ssr:false});
  
  const navLabels = useBreakpointValue({
    base: {
      home: 'Map',
      feedback: 'Feedback',
      social: '',
      share: '',
      about: '',
    },
    md: {
      home: 'Map',
      feedback: 'Feedback',
      social: 'Instagram',
      share: 'Share',
      about: 'About',
    },
  },{ssr:false});

  return (
    <Box __css={styles.navbar} {...rest} >
      <ReactLink to='/'>
        <Box __css={styles.title}>{pageTitle}</Box>
      </ReactLink>
      <Spacer />
      <Box __css={styles.buttons}>
        <ButtonGroup variant='nav' spacing='-2'>
          <Link
            href='/app'
          >
            <Button
              aria-label='@nature_rnd Instagram'
              leftIcon={<FiMap strokeWidth='inherit' />}
              fontWeight='inherit'
            >{navLabels?.home}</Button>
          </Link>
          <Link 
            href='https://forms.gle/rB1WaaLcUmEjxmMr8'
            isExternal
          >
            <Box __css={styles.buttonHighlight}>
              <Button
                rightIcon={<FiMessageSquare strokeWidth='inherit'/>}
                fontWeight='inherit'
              >{navLabels?.feedback}</Button>
            </Box>
          </Link>
          <Link
            href='https://www.instagram.com/nature_rnd/'
            isExternal
          >
            <Button
              aria-label='@nature_rnd Instagram'
              rightIcon={<FiInstagram strokeWidth='inherit' />}
              fontWeight='inherit'
            >{navLabels?.social}</Button>
          </Link>
          <ShareModalButton
            label={navLabels?.share}
            getShareURL={getShareURL}
          />
          <ReactLink to='/about'>
            <Button
              rightIcon={<FiHelpCircle strokeWidth='inherit' />}
              fontWeight='inherit'
            >{navLabels?.about}</Button>
          </ReactLink>
        </ButtonGroup>
      </Box>
    </Box>
  )
}