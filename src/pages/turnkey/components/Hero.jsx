import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../../../components/Nav'
import turnkeyBanner from '../../../assets/turnkeyBanner.jpg'

const Hero = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg={'#f7f7f7'}
      justifyContent={'center'}
      h={'fit-content'}
    >
      <Navigation />
      <Flex mt="100px" align={'flex-start'} gap={'50px'}>
        <Box flex={1}>
          <Text fontSize={'60px'} fontWeight={'bold'}>
            Turnkey electric vehicle charging solutions
          </Text>
          <Text fontSize={'18px'} fontWeight={'medium'}>
            While ChargeLab is focused on software, our partners offer
            end-to-end solutions. This includes engineering, installation, and
            best-in-class EV chargers pre-loaded with ChargeLab's network
            services.
          </Text>
        </Box>
        <Box flex={1}>
          <Image src={turnkeyBanner} borderRadius={'20px'} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
