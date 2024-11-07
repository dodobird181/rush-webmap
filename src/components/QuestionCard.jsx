import React, {useRef} from 'react'
import {
  Box,
  Button,
  IconButton,
  Image,
  useBreakpoint,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useActiveQuestionStore, questionActions } from '../data/Questions'
import { MobileMenuState } from './QuestionCardBar'

export default function QuestionCard({ question, size, variant, scrollRef, mobileMenuState, setMobileMenuState }) {
  const styles = useMultiStyleConfig('QuestionCard', { size, variant });
  const dispatch = useActiveQuestionStore(state => state.dispatch);
  const cardRef = useRef(null);
  const isMobile = ['base', 'sm'].includes(useBreakpoint());

  // hack for long title strings
  const longTitleStyle = size === 'wide' && question.title?.length > 22
    ? { fontSize: '1.125rem', lineHeight: '1.95rem'}
    : {}

  const shouldDisplayXButton = () => {
    if (isMobile){
      return ['expanded', 'wide'].includes(size) && mobileMenuState === MobileMenuState.COLLAPSED_HEADER;
    }
    else{
      return size === 'expanded';
    }
  };
  
  return question.key && (
    <Box
      ref={cardRef}
      __css={styles.card}
      onClick={() => {

        // hide the other question-cards on mobile and collapse the 
        // current (active) quesiton to the bottom of the screen
        if (isMobile && mobileMenuState === MobileMenuState.SELECT){
          setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
        }
        
        // Handle resizing / changing the question display
        switch (size) {
          case 'button':
            dispatch({question: question.key})
            if ( !cardRef?.current || !scrollRef?.current ) return;
            scrollRef.current.scroll({
              top: cardRef.current.offsetTop - 60,
              behaviour: 'smooth',
            })
            return
          case 'wide':
            dispatch({question: question.key, focus: questionActions.open})
            return
          default:
            return
        }
      }}
    >
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
        <IconButton
          icon={<FiX />}
          display={shouldDisplayXButton() ? null : 'none'}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          onClick={() => {

            if (isMobile && mobileMenuState === MobileMenuState.COLLAPSED_HEADER){
              setMobileMenuState(MobileMenuState.SELECT);
            }

            dispatch({question: question.key, focus: questionActions.close});
          }}
        />
        <Box __css={styles.title} {...longTitleStyle}>{question.title}</Box>
        <Box __css={styles.subtitle}>{question.question}</Box>
        <Box __css={styles.body}>
          {
            question.sections.one.map((list, index) => {
              return (
                <Box key={index}>
                  {list.heading}
                  <ul style={{
                    listStylePosition: 'outside',
                    paddingInlineStart: '1.5rem',
                  }}>
                    {list.items.map((item, index) => {
                      return (
                        <li key={index} style={{
                        }}>{item}</li>
                      )
                    })}
                  </ul>
                </Box>
              )
            })
          }
        </Box>
        <Box __css={styles.footer}>
          <Button
            rightIcon={<FaRegArrowAltCircleDown />}
            onClick={() => dispatch({question: question.key, focus: questionActions.makeYourMove})}
          >
            Make your move
          </Button>
        </Box>
      </Box>
    </Box>
  );
}