import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import work1 from '../../../assets/work1.webp'
import Wrapper from '../../../components/Wrapper'

const Hero = () => {
  return (
    <Box
      bg={'#eee'}
      // bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={'center'}
      h={'fit-content'}
    >
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
        pb={{
          base: '10px',
          xl: '100px',
        }}
      >
        <Navigation border={'1px'} />
        <Flex mt="70px" justify={'space-between'}>
          <Box maxW={'600px'}>
            <Text fontWeight={'bold'} fontSize={'50px'}>
              EV charging for workplaces
            </Text>
            <Text fontWeight={'medium'} fontSize={'20px'} py="30px">
              Thousands of electric vehicle drivers rely on workplace EV
              chargers to stay fully charged. Join the EV revolution by offering
              workplace charging at your office building.
            </Text>
            <Flex align={'center'} gap={'30px'}>
              <CustomButton
                btnText={'Contact us'}
                bg={'blue.300'}
                color={'#fff'}
                fontSize={'20px'}
                borderRadius={'50px'}
              />
              <CustomButton
                btnText={'see pricing'}
                bg={'none'}
                fontSize={'20px'}
                color={'blue.300'}
              />
            </Flex>
          </Box>
          <Box>
            <Image src={work1} h={'400px'} borderRadius={'20px'} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
