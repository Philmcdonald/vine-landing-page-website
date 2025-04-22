import { Box, Flex, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import AboutImage from '../../../assets/aboutImg.webp'
import { CustomText, MainHeading, Wrapper } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Navigation />
        <Box mt={{ base: '40px', xl: '70px' }} textAlign={'center'}>
          <MainHeading>
            ChargeLab’s mission is to build EV charging solutions that scale
          </MainHeading>
          <CustomText py={'20px'} maxW={'700px'} margin={'0px auto'}>
            This means making EV charger deployment fast and affordable. And
            making charging easy and reliable for every EV driver.
          </CustomText>
        </Box>
        <Flex justify={'center'} my={{ base: '', xl: '50px' }}>
          <Image src={AboutImage} h={'500px'} borderRadius={'20px'} />
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
