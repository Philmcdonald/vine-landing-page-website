import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Navigation from '../../../components/Nav'
import chargePhone from '../../../assets/chargePhone.webp'
import chargeDash from '../../../assets/chargeDash.webp'
import { CustomButton } from '../../../components/CustomButton'

const Hero = () => {
  const [picture, setPicture] = useState(true)
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg="#f7f7f7"
      h={'fit-content'}
    >
      <Navigation />
      <Flex my="70px" gap={'100px'} ml={'100px'}>
        <Box color={'#000'} maxW={'600px'}>
          <Text fontSize={'60px'} fontWeight={'bold'}>
            Our services, your brand
          </Text>
          <Text
            fontWeight={'medium'}
            fontSize={'20px'}
            my={'20px'}
            maxW={'800px'}
          >
            ChargeLab's mobile app and suite of services were built with white
            labeling in mind. We power some of the world's most innovative EV
            charging networks, utility programs, and e-mobility initiatives.
          </Text>
          <Box>
            <CustomButton
              btnText={'Tab the phone to explore an example'}
              bg={'none'}
              px="0px"
              fontSize={'18px'}
            />
          </Box>
        </Box>

        <Box>
          {picture ? (
            <Image
              src={chargePhone}
              h={'550px'}
              borderRadius={'20px'}
              boxShadow={'2xl'}
              transition="transform 0.5s ease" // Smooth transition for the rotation
              _hover={{ transform: 'rotate(15deg) scale(1.1)' }} // Rotate by 90 degrees on hover
              onClick={() => {
                setPicture(!picture)
              }}
            />
          ) : (
            <Image
              src={chargeDash}
              h={'550px'}
              borderRadius={'20px'}
              boxShadow={'2xl'}
              transition="transform 0.5s ease" // Smooth transition for the rotation
              _hover={{ transform: 'rotate(15deg) scale(1.1)' }} // Rotate by 90 degrees on hover
              onClick={() => {
                setPicture(!picture)
              }}
            />
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default Hero
