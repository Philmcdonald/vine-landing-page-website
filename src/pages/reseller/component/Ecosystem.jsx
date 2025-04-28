import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText, SubHeading, Wrapper } from '../../../components'
import { ecosystem } from '../data'

const Ecosystem = () => {
  return (
    <Box bg={'teal'} justifyContent={'center'} h={'fit-content'} color={'#fff'}>
      <Wrapper>
        <SubHeading align={{ base: 'left', xl: 'center' }} color={'#fff'}>
          Tap into our ecosystem
        </SubHeading>
        <CustomText
          py={{ base: '30px', xl: '30px' }}
          textAlign={{ base: 'left', xl: 'center' }}
        >
          Get access to best-in-class hardware, charger performance data, and a
          comprehensive software suite.{' '}
        </CustomText>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          justify={'center'}
          gap={{ base: '30px', xl: '20px' }}
          my="30px"
        >
          {ecosystem.map(({ title, img, content }) => {
            return (
              <Box color={'#fff'} key={title}>
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
        <Flex justify={'center'} my="50px">
          <CustomButton
            btnText={'Get started'}
            bg={'#8fc03f'}
            borderRadius={'50px'}
            px={'20px'}
          />
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Ecosystem
