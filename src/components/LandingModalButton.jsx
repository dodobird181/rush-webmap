import React from 'react';
import {
  useBreakpointValue,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import FormattedText from './FormattedText';
import { AboutPageText, AboutPageTitleLong } from '../data/TextContent';

export default function LandingModalButton(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isCentered = useBreakpointValue({
    xl: true,
    md: false,
    base: false,
  })
  return (
    <>
      <Button
        rightIcon={<FaRegQuestionCircle strokeWidth='4' />}
        onClick={onOpen}
        fontWeight='medium'
      >About</Button>
      <Modal 
        isOpen={isOpen}
        onClose={onClose}
        isCentered={isCentered}
        closeOnOverlayClick={false}
        scrollBehavior='inside'
        size={{
            xl: "2xl",
            md: "xl",
            base: "full",
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader maxW={parseInt(props.vh, 10) < 680 ? '2xl' : '4xl'}>
            {AboutPageTitleLong}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody maxW={parseInt(props.vh, 10) < 680 ? '2xl' : '4xl'}>
            <Stack spacing='1em' maxH='100%'>
              <FormattedText textArray={AboutPageText} />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}