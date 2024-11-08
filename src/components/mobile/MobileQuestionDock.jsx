import React, { useRef, useState } from 'react';
import { Box, useBreakpoint, useMultiStyleConfig } from '@chakra-ui/react';
import QuestionCard from '../QuestionCard';
import Questions, { useActiveQuestionStore } from '../../data/Questions';

/**
 * Dock the active question to the bottom of the screen on mobile devices.
 * TODO: Describe what happened with the bottom menu tabs switching between information.
 */
export default MobileQuestionDock = ({isMobile, activeQuestion, mobileMenuState, setMobileMenuState}) => {
  const styles = useMultiStyleConfig('MobileQuestionDock');

  const shouldRender = () => {
    
  };
  
  return (
    <Box __css={styles.container}>
        <QuestionCard
          key={activeQuestion}
          question={{key: activeQuestion, ...Questions.get(activeQuestion)}}
          size={
            sectionFocus === 1
            ? 'expanded'
            : 'wide'
          }
          variant='sticky'
          mobileMenuState={mobileMenuState}
          setMobileMenuState={setMobileMenuState}
        />
        {
          [...Questions.entries()]
          .filter(q => q[0] !== activeQuestion && mobileMenuState === MobileMenuState.SELECT || isMobile === false)
          .map(q => {
            return (
              <MobileQuestionCard
                key={q[0]}
                question={{key: q[0], ...q[1]}}
                size={(isMobile ? 'wide' : 'button')}
                scrollRef={scrollRef}
                mobileMenuState={mobileMenuState}
                setMobileMenuState={setMobileMenuState}
              />
            )
          })
        }
    </Box>
  )
}