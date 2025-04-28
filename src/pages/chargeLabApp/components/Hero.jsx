import { Box, Button, Flex, Grid, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import logoB from '../../../assets/logoB.png'
import google from '../../../assets/playStore.svg'
import mobile from '../../../assets/mobile.png'
import { Wrapper, MainHeading, CustomText } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#f7f7f7'}>
      <Navigation logo={logoB} />
      <Wrapper
        py={{
          base: '20px',
          xl: '20px',
        }}
        mb={{ xl: '-15rem' }}
      >
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          mt={{ base: '30px', xl: '70px' }}
          mb={{ base: '30px' }}
        >
          <Box maxW={'700px'}>
            <MainHeading>Download the VineVolt Driver&apos;s App</MainHeading>
            <CustomText py={{ base: '20px', xl: '20px' }} maxW={'400px'}>
              Click a button below to get the VineVolt Driver&apos;s app for iOS
              or Android.
            </CustomText>
            <Flex mt="20px" align={'center'} gap={'20px'}>
              {/* <CustomButton
                btnText={'App Store'}
                bg={'none'}
                border={'1px solid #000'}
                borderRadius={'10px'}
              /> */}
              <Button
                p={'0px'}
                bg="transparent"
                _hover={{ bg: 'transparent', border: 'none' }}
              >
                <Image h={{ base: '4rem', xl: '100%' }} src={google} />
              </Button>
            </Flex>
          </Box>
          <Box mt={{ base: '30px', xl: '-20px' }}>
            <Image
              mt={{ xl: '-100px' }}
              transform={{ base: '', xl: 'rotate(30deg)' }}
              height={{ base: '', xl: '60rem' }}
              src={mobile}
            />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Hero
