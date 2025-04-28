import { Box, Text } from '@chakra-ui/react'
// import Navigation from '../../components/Nav'

import { MainHeading, Wrapper } from '../../components'
import { Cookie, Driver, Privacy, Site } from './term'

const Index = () => {
  return (
    <Box bg={'#f7f7f7'} h={'fit-content'}>
      <Wrapper py={'20px'}>
        <Box>
          <Text
            fontSize={'35px'}
            fontWeight={'semibold'}
            color={'#8fc03f'}
            textAlign={'center'}
          >
            Terms & policies
          </Text>
          <MainHeading
            fontWeight={'semibold'}
            fontSize={{ base: '25px', xl: '50px' }}
            lineHeight={{ xl: '5rem' }}
            mt={{ base: '20px', xl: '10px' }}
            mb={{ base: '30px', xl: '50px' }}
            mx={'auto'}
            maxW={'800px'}
            textAlign={'center'}
          >
            Explore our terms & conditions, cookies, and privacy policies
          </MainHeading>
          <Box width={{ xl: '90%' }} mx={'auto'}>
            <Driver />
            <Site />
            <Privacy />
            <Cookie />
          </Box>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Index
