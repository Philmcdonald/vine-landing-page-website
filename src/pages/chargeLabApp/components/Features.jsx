import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { features } from '../data'

import {
  CustomText,
  InfoHeading,
  SubHeading,
  Wrapper,
} from '../../../components'

const Features = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'1000px'}>
          <InfoHeading color={'blue.300'} fontWeight={'bold'} fontSize={'25px'}>
            Features
          </InfoHeading>
          <SubHeading py="20px">
            Enjoy Hassle-Free EV Charging Experience-{' '}
            <span style={{}}>
              VineVolt app is built by EV drivers, for EV drivers.{' '}
            </span>
          </SubHeading>
          <CustomText>
            VineVolt&apos;s app is built by EV drivers, for EV drivers.
          </CustomText>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          gap={10}
          mt="50px"
        >
          {features.map(({ title, content, img }) => {
            return (
              <Box color={'#000'} key={title}>
                <Image
                  src={img}
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

export default Features
