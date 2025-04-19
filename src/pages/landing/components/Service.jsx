import { Box, Grid, Text } from '@chakra-ui/react'
import Wrapper from '../../../components/Wrapper'
import React from 'react'
import CustomText from '../../../components/CustomText'
import { card } from '../../../data/landing-page.data'

const Service = () => {
  return (
    <Box bg={'#FFF'}>
      <Wrapper
        py={{
          base: '45px',
          xl: '100px',
        }}
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr', lg: '1fr 1fr 1fr' }}
          h={'fit-content'}
          gap={5}
        >
          {card.map(({ title, content }) => {
            return (
              <Box
                bg={{ base: 'none', md: '#eee' }}
                borderRadius={{ base: '0px', md: '10px' }}
                p={{ base: '0px', md: '20px' }}
                flex={1}
                textAlign={{ base: 'left' }}
              >
                <Text fontSize="25px" fontWeight={'bold'} py={'10px'}>
                  {title}
                </Text>
                <CustomText>
                  {content.map((item, index) => {
                    if (item.text && item.style) {
                      return (
                        <Text as="span" key={index} style={item.style}>
                          {item.text}
                        </Text>
                      )
                    }
                    return <span key={index}>{item}</span>
                  })}
                </CustomText>
              </Box>
            )
          })}
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Service
