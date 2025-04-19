import { Box, Flex, Text, Image, Grid } from '@chakra-ui/react'
import React from 'react'
import chargeMobile from '../../../assets/chargeMobile.webp'
import chargeDashboard from '../../../assets/chargeDashboard.webp'
import Wrapper from '../../../components/Wrapper'
import CustomText from '../../../components/CustomText'
import SubHeading from '../../../components/SubHeading'
import InfoHeading from '../../../components/InfoHeading'

const WhyCharge = () => {
  return (
    <Box>
      <Wrapper pb={{ base: '20px', xl: '30px' }}>
        <Box>
          <Box>
            <InfoHeading>Why ChargeLab</InfoHeading>
            <SubHeading maxW={{ base: '', xl: '50%' }}>
              Your full-stack solution for smart EV charging
            </SubHeading>

            <Grid
              templateColumns={{ base: '1fr', md: '1fr 1fr' }}
              justify={'space-between'}
              align={'center'}
              mt={{ base: '20px' }}
              gap={{ base: '30px', md: '50px' }}
            >
              <CustomText
                fontSize={{ base: '18px' }}
                textAlign={{ base: 'left' }}
              >
                We give fleets, charging networks, and EV charging solutions
                providers all the tools they need to build smart EV
                infrastructure businesses. ChargeLab is the best platform to
                connect and control EV chargers at scale.
              </CustomText>

              <CustomText
                fontSize={{ base: '18px' }}
                textAlign={{ base: 'left' }}
              >
                We're also fanatical about user experience for EV drivers.
                Plugging in should be fun and easy.
              </CustomText>
            </Grid>
          </Box>
        </Box>
      </Wrapper>
      <Flex
        mx="auto"
        width={{ base: '85%' }}
        flexDir={{ base: 'column', md: 'row' }}
        pb={{ base: '30px', xl: '50px' }}
      >
        <Box>
          <Image src={chargeMobile} />
        </Box>

        <Box>
          <Image src={chargeDashboard} />
        </Box>
      </Flex>
    </Box>
  )
}

export default WhyCharge
