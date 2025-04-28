import { Box, Flex, Grid } from '@chakra-ui/react'
import { Text } from '../../../components'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import Wrapper from '../../../components/Wrapper'
import MainHeading from '../../../components/MainHeader'
// import graphic1 from '../../../assets/graphic1.svg'
import logoB from '../../../assets/logoB.png'

const Hero = () => {
  return (
    <Box
      bgGradient="linear(to-r,  #8fc03f, #8fc03f)"
      height={'fit-content'}
      clipPath={{
        base: '',
        md: 'polygon(0 0, 100% 0, 100% 70%, 0 99%)',
      }}
      overflow={'hidden'}
    >
      <Navigation
        logo={logoB}
        bg="#f7f7f7"
        color="#000"
        loginTextColor="#fff"
        loginColor="#fff"
        iconColor="#fff"
      />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Grid
          mt={{ lg: '45px', xl: '20px' }}
          templateColumns={{ base: '1fr', lg: '58% 40%' }}
          textAlign={{ base: 'left' }}
          mb={{ base: '50px', lg: '150px' }}
        >
          <Flex
            flexDir={'column'}
            alignItems={'flex-start'}
            justifyContent={{ lg: 'center', xl: 'flex-start' }}
            color="#fff"
            flex={1}
            mt={{ base: '40px', lg: '60px', xl: '50px' }}
            w={{ base: '98%', md: '100%' }}
          >
            <MainHeading>
              Comprehensive Software for EV Charging Businesses
            </MainHeading>

            <Text
              fontFamily={'Inter, sans-serif'}
              my={{ base: '30px', lg: '20px', xl: '25px' }}
              mb={{ base: '35px' }}
            >
              Vine Mobility&apos;s software forms the technological foundation
              that connects hardware to users, enabling seamless EV charging
              experiences, while giving operators complete control over their
              charging ecosystems.
            </Text>

            <CustomButton btnText="Contact us" color="#fff" />
          </Flex>

          {/* <Box w={{ lg: '500px' }}>
            <Image src={graphic1} marginLeft={{ lg: '76px' }} />
          </Box> */}
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
