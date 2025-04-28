import { Box, Flex, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import AboutImage from '../../../assets/aboutImg.webp'
import { CustomText, MainHeading, Wrapper } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Navigation />
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
      >
        <Box mt={{ base: '40px', xl: '40px' }} textAlign={'center'}>
          <MainHeading>
            Vine Mobility’s mission is to power Africa’s shift to electric
            mobility.
          </MainHeading>
          <CustomText py={'20px'} maxW={'700px'} margin={'0px auto'}>
            This means making EV charging accessible, efficient, and built for
            growth.
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
