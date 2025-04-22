import { Box } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import logoW from '../../../assets/logoW.png'
import { CustomText, MainHeading, Wrapper } from '../../../components'

const Hero = () => {
  return (
    <Box bgGradient="linear(to-r, teal.500, green.500)" h={'fit-content'}>
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

        <Box my={{ base: '40px', lg: '60px', xl: '50px' }} color={'#fff'}>
          <MainHeading>
            Pricing that scales for EV charger management
          </MainHeading>
          <CustomText my={'20px'} maxW={'800px'}>
            ChargeLab network services can be purchased from an authorized
            reseller. If you are an EV charger manufacturer, network operator,
            or turnkey installer of EV chargers, contact us directly for
            pricing.
          </CustomText>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Hero
