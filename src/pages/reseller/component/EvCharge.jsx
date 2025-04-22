import { Box, Flex, Image } from '@chakra-ui/react'
import { CustomButton } from '../../../components/CustomButton'
import evCharge from '../../../assets/evCharge.webp'
import { CustomText, SubHeading, Wrapper } from '../../../components'

const EvCharge = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Flex
          flexDirection={{ base: 'column', xl: 'row' }}
          align={'center'}
          justify={'center'}
          gap={'100px'}
        >
          <Box maxW={'500px'}>
            <SubHeading>Your EV charging solutions partner</SubHeading>
            <CustomText py="30px">
              Partnership can be powerful. We help you access hardware inventory
              with exclusive pricing, win more RFPs, offload support, and make
              more money without reinventing your business.
            </CustomText>
            <CustomButton
              btnText={'See pricing'}
              bg={'teal'}
              borderRadius={'50px'}
              color={'#fff'}
            />
          </Box>
          <Box>
            <Image src={evCharge} />
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  )
}

export default EvCharge
