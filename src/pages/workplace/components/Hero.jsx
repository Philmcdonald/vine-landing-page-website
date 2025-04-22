import { Box, Flex, Grid, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import work1 from '../../../assets/work1.webp'
import Wrapper from '../../../components/Wrapper'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText, MainHeading } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
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
        <Navigation />
        <Grid
          mt={{ base: '45px', xl: '50px' }}
          gap={{ base: '40px', xl: '50px' }}
          justify={'space-between'}
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
        >
          <Box maxW={'600px'}>
            <MainHeading>EV charging for workplaces</MainHeading>
            <CustomText py="30px">
              Thousands of electric vehicle drivers rely on workplace EV
              chargers to stay fully charged. Join the EV revolution by offering
              workplace charging at your office building.
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
            <Image src={work1} h={'400px'} borderRadius={'20px'} />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
