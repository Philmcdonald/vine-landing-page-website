import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react'
import Navigation from '../../components/Nav'
import { faqs } from './components/DummyData'
import { AiFillPlusCircle } from 'react-icons/ai'

const Index = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg={'#eee'}
      h={'fit-content'}
    >
      <Navigation />
      <Box mt="70px">
        <Text
          fontSize={'40px'}
          fontWeight={'bold'}
          color={'teal'}
          textAlign={'center'}
          pb="40px"
        >
          Terms & policies
        </Text>
        <Text
          fontSize={'50px'}
          maxW={'1000px'}
          fontWeight={'bold'}
          margin={'0px auto'}
          textAlign={'center'}
        >
          Explore our terms & conditions, cookies, and privacy policies
        </Text>
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              w={['100%', '100%', '100%', '100%']}
              m={'0px auto'}
              key={index}
              allowMultiple
            >
              <AccordionItem
                bg={'#F1F9F8'}
                rounded={'lg'}
                p={'5px'}
                mb={'25px'}
                border={'1.2px solid #D6D5D5'}
              >
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    color={'#1A0031'}
                    fontSize={'1rem'}
                    fontWeight={'semibold'}
                    py={'7px'}
                  >
                    {faq.question}
                  </Box>
                  <AiFillPlusCircle color="teal" size={20} />
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={'15px'}>
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Index
