import { Box, Flex, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
// import enterprise1 from '../../../assets/enterprise1.webp'
// import enterprise2 from '../../../assets/enterprise2.webp'
import vineCharge from '../../../assets/vineCharge.png'
import logoB from '../../../assets/logoB.png'
import CustomText from '../../../components/CustomText'
import { Wrapper, MainHeading } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'}>
      <Navigation color={'#000'} logo={logoB} />
      <Wrapper
        py={{
          base: '10px',
          xl: '40px',
        }}
      >
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          mt={{ base: '50px', xl: '40px' }}
          mb={{ base: '20px', xl: '30px' }}
          align={'center'}
          position={'relative'}
        >
          <Box maxW={{ base: '500px', xl: '500px' }}>
            <MainHeading maxW={{ base: '80%', xl: '100%' }}>
              A Smart Solution to EV Charging
            </MainHeading>
            <CustomText mt={{ base: '20px', xl: '30px' }} maxW={'500px'}>
              Our enterprise solution makes managing EV charging simple and
              flexible. VineCharge works with all OCPP chargers, supports every
              electric vehicle, and accepts all common payment methods. Easy to
              use, powerful to deploy.
            </CustomText>
            <Box mt="30px">
              <CustomButton btnText="Contact us" />
            </Box>
          </Box>

          <Box mt={{ base: '40px', xl: '-30px' }}>
            <Box>
              <Image
                src={vineCharge}
                w={{ base: '100%', xl: '70rem' }}
                h="auto"
              />
            </Box>
            {/* <Box
              display={{ base: 'none', xl: 'block' }}
              position={{ base: 'relative', xl: 'absolute' }}
              top={{ base: '', xl: 250 }}
              right={{ base: '', xl: '20px' }}
            >
              <Image src={enterprise2} h={'500px'} w="auto" />
            </Box> */}
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
