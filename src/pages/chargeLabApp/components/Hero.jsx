import { Box, Flex, Image } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import appImg from '../../../assets/appImg.webp'
import logoB from '../../../assets/logoB.png'
import { Wrapper, MainHeading, CustomText } from '../../../components'

const Hero = () => {
  return (
    <Box bg={'#eee'}>
      <Wrapper
        py={{
          base: '20px',
          xl: '20px',
        }}
      >
        <Navigation logo={logoB} />
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          mt={{ base: '45px', xl: '70px' }}
          mb={{ base: '30px' }}
        >
          <Box maxW={'700px'} flex={1}>
            <MainHeading>Download the VineVolt Driver&apos;s App</MainHeading>
            <CustomText py="20px" maxW={'400px'}>
              Click a button below to get the VineVolt Driver&apos;s app for iOS
              or Android.
            </CustomText>
            <Flex mt="20px" align={'center'} gap={'20px'}>
              <CustomButton
                btnText={'App Store'}
                bg={'none'}
                border={'1px solid #000'}
                borderRadius={'10px'}
              />
              <CustomButton
                btnText={'Google Play Store'}
                bg={'none'}
                border={'1px solid #000'}
                borderRadius={'10px'}
              />
            </Flex>
          </Box>

          <Box mt={{ base: '30px', xl: '-20px' }} flex={1}>
            <Image src={appImg} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default Hero
