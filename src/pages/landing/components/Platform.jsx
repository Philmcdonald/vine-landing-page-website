import { Box, Flex, Image, Text, Grid } from '@chakra-ui/react'
import React from 'react'
import graphic2 from '../../../assets/graphic2.svg'
import desktop from '../../../assets/desktop.svg'
import motor from '../../../assets/motor.svg'
import yatch from '../../../assets/yatch.svg'
import tablet from '../../../assets/tablet.svg'

import Wrapper from '../../../components/Wrapper'
import SubHeading from '../../../components/SubHeading'
import { CustomText } from '../../../components/CustomText'

import { platform } from '../../../data/landing-page.data'

const Platform = () => {
  return (
    <Box bg={'#2a4352'}>
      <Wrapper>
        <Flex justifyContent={'center'}>
          <Box pt={'50px'}>
            <Grid
              // mt={{ base: '', md: '10px' }}
              templateColumns={{ base: '1fr', md: '55% 1fr' }}
              gap={'50px'}
            >
              <Box color={'white'}>
                <Text fontSize={'23px'} color={'green.300'}>
                  ChargeLab Platform
                </Text>

                <SubHeading maxW={{ base: '', xl: '90%' }} color={'white'}>
                  A software-first approach to EV charging
                </SubHeading>

                <CustomText mt={{ base: '20px' }}>
                  Through software, we bring the industry's most flexible EV
                  infrastructure solutions. Manage any OCPP charger, charge any
                  electric car, and accept every major payment method.
                </CustomText>
              </Box>

              <Box display={{ base: 'none', lg: 'block' }}>
                <Image src={graphic2} />
              </Box>
            </Grid>
          </Box>
        </Flex>
      </Wrapper>

      <Box
        mt={{ base: '40px', md: '30px' }}
        mb={{ base: '20px', md: '0px' }}
        borderTop={{ base: '1px', md: 'none' }}
        borderColor={'white'}
      ></Box>

      <Wrapper>
        <Grid
          gap={{ base: '45px', md: '30px' }}
          templateColumns={{ base: '1fr', md: '1fr 1fr 1fr 1fr' }}
        >
          {platform.map(({ src, title, content }) => {
            return (
              <Box color={'#fff'}>
                <Image
                  src={src}
                  h={{ base: '38px', md: '40px' }}
                  mb={{ base: '10px', md: '' }}
                />
                <Text
                  py="10px"
                  fontSize={{ base: '16px', md: '15px' }}
                  fontWeight={'bold'}
                >
                  {title}
                </Text>
                <Text fontSize={{ base: '14px', md: '14px' }}>{content}</Text>
              </Box>
            )
          })}
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Platform
