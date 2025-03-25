import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { CustomText } from '../../../components/CustomText'
import React from 'react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import Wrapper from '../../../components/Wrapper'
import graphic1 from '../../../assets/graphic1.svg'
import logoW from '../../../assets/logoW.png'

const Hero = () => {
  return (
    <Box
      bgGradient="linear(to-r,  #40651a, #3ba936)"
      height={'fit-content'}
      clipPath={{
        base: '',
        md: 'polygon(0 0, 100% 0, 100% 70%, 0 99%)',
      }}
      overflow={'hidden'}
    >
      <Wrapper>
        <Navigation
          logo={logoW}
          bg="none"
          color="#fff"
          loginTextColor="#fff"
          loginColor="#fff"
          iconColor="#fff"
        />

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
            mt={{ base: '40px', lg: '60px', xl: '100px' }}
            w={{ base: '98%', md: '100%' }}
          >
            <Text
              fontSize={{ base: '30px', lg: '40px', xl: '58px' }}
              lineHeight={{ base: '3rem', lg: '4rem', xl: '5.5rem' }}
              fontWeight={{ base: '600', xl: '700' }}
            >
              Software for EV charging businesses
            </Text>

            <CustomText
              my={{ base: '30px', lg: '20px', xl: '25px' }}
              mb={{ base: '35px' }}
            >
              ChargeLab is the operating system for EV chargers. We're the
              back-end software powering North America's leading EV charger
              manufacturers, turnkey installers, and network operators.
            </CustomText>

            <CustomButton
              px="20px"
              py="15px"
              mt={{ lg: '10px' }}
              borderRadius="50px"
              btnText="Contact us"
              bg="#000"
              color="#fff"
            />
          </Flex>

          <Box w={{ lg: '500px' }}>
            <Image src={graphic1} marginLeft={{ lg: '76px' }} />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
