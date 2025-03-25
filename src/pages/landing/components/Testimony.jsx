import { Box, Grid, Text } from '@chakra-ui/react'
import Wrapper from '../../../components/Wrapper'
import React from 'react'
import { CustomText } from '../../../components/CustomText'
import { testimony } from '../../../data/landing-page.data'

const Testimony = () => {
  return (
    <Box bg={'#eee'}>
      <Wrapper>
        <Box px={{ base: '', md: '50px' }} pb="50px">
          <Text
            fontSize={'40px'}
            pt="30px"
            textAlign={'center'}
            fontWeight={'bold'}
          >
            What Our Partners Say
          </Text>
          <Text
            textAlign={'center'}
            fontSize={'18px'}
            fontWeight={'medium'}
            pt="20px"
          >
            We make money when you make money.
          </Text>
          <Text textAlign={'center'} fontSize={'18px'} fontWeight={'medium'}>
            Our team is here to support you every step of the way.{' '}
          </Text>

          <Grid
            templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
            mt="30px"
            justifyContent={'center'}
            gap={'30px'}
          >
            {testimony.map(({ name, title, content }) => {
              return (
                <Box
                  bg={'#fff'}
                  borderRadius={'10px'}
                  p="20px"
                  maxW={'300px'}
                  transition="transform 0.3s ease"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  cursor={'pointer'}
                >
                  <Text fontSize={'25px'} fontWeight={'medium'}>
                    {name}
                  </Text>
                  <Text fontWeight={'medium'}>{title}</Text>
                  <CustomText pt="20px">{content}</CustomText>
                </Box>
              )
            })}
          </Grid>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Testimony
