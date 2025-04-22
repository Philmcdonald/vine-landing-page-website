import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import p1 from '../../../assets/p1.jpg'
import { CustomText, MainHeading, Wrapper } from '../../../components'

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
      >
        <Navigation />
        <Grid
          gridTemplateColumns={{ xl: '53% 1fr' }}
          my={{ base: '45px', xl: '50px' }}
          gap={{ base: '40px', xl: '50px' }}
          justify={'space-between'}
        >
          <Box>
            <MainHeading>Public EV charging solutions</MainHeading>
            <CustomText py={{ base: '20px', xl: '30px' }}>
              As the world goes electric, shopping malls, restaurants, and
              community centers will become the refuelling stations of the
              future. ChargeLab offers most frictionless public charging
              experience for both site hosts and EV drivers.
            </CustomText>
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
            <Image src={p1} h={'400px'} borderRadius={'20px'} />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
