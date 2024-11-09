import React, { useRef, useState } from 'react';
import { Box, Text, useBreakpoint, useMultiStyleConfig } from '@chakra-ui/react';
import QuestionCard from '../QuestionCard';
import Questions, { useActiveQuestionStore } from '../../data/Questions';
import { MobileMenuState } from '../../App';
import MobileQuestionCard from './MobileQuestionCard';

/**
 * Dock the active question to the bottom of the screen on mobile devices.
 * TODO: Describe what happened with the bottom menu tabs switching between information.
 */
export default function MobileQuestionDock ({isMobile, activeQuestion, mobileMenuState, setMobileMenuState}){
  
  const styles = useMultiStyleConfig('MobileQuestionDock');

  const shouldRender = () => {
    // Render on mobile when header is collapsed to bottom of screen, or expanded 
    // on bottom of screen to show card details.
    return isMobile && [
      MobileMenuState.COLLAPSED_HEADER, 
      MobileMenuState.EXPANDED_HEADER,
    ].includes(mobileMenuState);
  };

  const getCardSize = () => {
    switch(mobileMenuState){
      case MobileMenuState.COLLAPSED_HEADER:
        return 'wide';
      case MobileMenuState.EXPANDED_HEADER:
        return 'expanded';
      default:
        console.error('Cannot render "MobileQuestionDock" in mobile menu state: ' + mobileMenuState + ".");
        return null;
    }
  };

  console.log('should render: ' + shouldRender());
  
  return shouldRender() && (
    <Box>
      <Text>awdawd</Text>
      <Box __css={styles.container}>
        <MobileQuestionCard
          key={activeQuestion}
          question={{key: activeQuestion, ...Questions.get(activeQuestion)}}
          size={getCardSize()}
          variant='sticky'
          mobileMenuState={mobileMenuState}
          setMobileMenuState={setMobileMenuState}
        />
      </Box>
    </Box>
    
  )
}