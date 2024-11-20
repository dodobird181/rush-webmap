import React from 'react'
import {
  Box,
  IconButton,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useMultiStyleConfig
} from '@chakra-ui/react'
import { FaAngleDown, FaBook, FaHighlighter, FaLink } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useActiveQuestionStore, questionActions } from '../data/QuestionStore';
import { MobileMenuState } from '../App'


/**
 * Just like 'QuestionCard', but with logic for mobile devices. It is assumed that this component
 * is *only* ever rendered on mobile devices.
 */
export default function MobileQuestionCard({ question, size, variant, mobileMenuState, setMobileMenuState }){

  // hack for long title strings
  const longTitleStyle = () => {
    if ('wide' === size && question.title?.length > 22){
        return { fontSize: '1.125rem', lineHeight: '1.95rem' };
    }
    return {};
  };

  const styles = useMultiStyleConfig('QuestionCard', { size, variant }); // re-use theme from original question card
  const dispatch = useActiveQuestionStore(state => state.dispatch);

  const onCardClick = () => {
    if (mobileMenuState === MobileMenuState.SELECT){
      console.log('card clicked when in SELECT state!');
      setMobileMenuState(MobileMenuState.COLLAPSED_HEADER);
      dispatch({question: question.key, focus: questionActions.open});
    }
    else if (mobileMenuState === MobileMenuState.COLLAPSED_HEADER){
      console.log('card clicked when in COLLAPSED HEADER state!')
      setMobileMenuState(MobileMenuState.EXPANDED_HEADER);
    }
  };

  const cardContent = (
    <Box>
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
    </Box>
  );

  return question.key && (
    <Box __css={styles.card} onClick={onCardClick}>
      <Image src={question.image} __css={styles.image} />
      <Box __css={styles.content}>
        <IconButton
          icon={<FiX />}
          display={mobileMenuState === MobileMenuState.COLLAPSED_HEADER ? 'block' : 'none'}
          onClick={() => setMobileMenuState(MobileMenuState.SELECT)}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          _hover={{bg: "var(--chakra-colors-rush-200)" }}
          transitionDuration='0.02s'
          zIndex='1001'
        />
        <IconButton
          icon={<FaAngleDown />}
          display={mobileMenuState === MobileMenuState.EXPANDED_HEADER ? 'block' : 'none'}
          onClick={() => setMobileMenuState(MobileMenuState.COLLAPSED_HEADER)}
          position='absolute'
          top='0.6rem'
          right='0.6rem'
          variant='ghost'
          height='1.875rem'
          minWidth='1.875rem'
          maxWidth='1.875rem'
          _hover={{bg: "var(--chakra-colors-rush-200)" }}
          transitionDuration='0.02s'
          zIndex='1001'
        />
        {mobileMenuState !== MobileMenuState.EXPANDED_HEADER ? cardContent : false}
        <Tabs 
          display={mobileMenuState === MobileMenuState.EXPANDED_HEADER}
          position='relative'
          variant='unstyled'
          minWidth='100%'
        >
          <TabPanels>
            <TabPanel>
              {cardContent}
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
          <TabList
            minWidth='100%' 
            justifyContent='space-evenly' 
            gap='10px'
          >
            <Tab style={styles.mobileTabMenuTab}>
              <FaHighlighter style={styles.mobileTabMenuIcon}/>Notice
            </Tab>
            <Tab style={styles.mobileTabMenuTab}>
              <FaBook style={styles.mobileTabMenuIcon}/>Act
            </Tab>
            <Tab style={styles.mobileTabMenuTab}>
              <FaLink style={styles.mobileTabMenuIcon}/>Check out
            </Tab>
          </TabList>
          <TabIndicator 
            marginTop='-42px' // HACK: negative margin because Chakra doesn't recognize TabIndicator unless it's directly below a TabList.
            height='2px' 
            bg='currentColor' 
            borderRadius='1px'
          />
        </Tabs>
      </Box>
    </Box>
  );
}