import { Box, Text } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import logoW from '../../../assets/logoW.png'
import { MainHeading, Wrapper } from '../../../components'

const Hero = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={'center'}
      h={'fit-content'}
    >
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Navigation
          logo={logoW}
          color={'#fff'}
          loginColor={'#fff'}
          loginTextColor={'#fff'}
        />
        <Box
          my={{ base: '40px', lg: '60px', xl: '50px' }}
          maxW={'600px'}
          color={'#fff'}
        >
          <MainHeading>Integrations</MainHeading>
          <Text fontWeight={'medium'} fontSize={'18px'} my={'20px'}>
            Extend the capabilities of your EV infrastructure with integrations.
            Many of the integrations listed below are available exclusively
            through Vine Mobility&apos;s EV charging OS.
          </Text>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Hero
