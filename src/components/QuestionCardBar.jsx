import React, { useRef, useState } from 'react';
import { Box, useBreakpoint, useMultiStyleConfig } from '@chakra-ui/react';
import QuestionCard from './QuestionCard';
import Questions, { useActiveQuestionStore } from '../data/QuestionStore';

/**
 * The possible states that the menu on mobile versions can be in.
 */
export const MobileMenuState = {
  SELECT: 'select_a_question',
  COLLAPSED_HEADER: 'question_header_is_collapsed',
  EXPANDED_HEADER: 'question_header_is_expanded',
};


export default function QuestionCardBar() {
  const [mobileMenuState, setMobileMenuState] = useState(MobileMenuState.SELECT);
  const styles = useMultiStyleConfig('QuestionCardBar');
  const isMobile = ['base', 'sm'].includes(useBreakpoint());
  const {
    activeQuestion,
    sectionFocus,
  } = useActiveQuestionStore(state => ({
    activeQuestion: state.activeQuestion,
    sectionFocus: state.sectionFocus
  }))
  const scrollRef = useRef(null);
  
  return (
    <Box __css={styles.container} ref={scrollRef}>
      <Box __css={styles.bar}>
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
              <QuestionCard
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
    </Box>
  )
}