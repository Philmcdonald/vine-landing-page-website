import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'

import sop1 from '../../../assets/sop1.svg'
import sop2 from '../../../assets/sop2.svg'
import sop3 from '../../../assets/sop3.svg'
import { CustomButton } from '../../../components/CustomButton'
import { SubHeading, Wrapper } from '../../../components'

const Partners = () => {
  return (
    <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box>
          <SubHeading textAlign={'center'}>
            How we support our partners
          </SubHeading>
          <Grid
            gridTemplateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
            justify={'center'}
            align={'center'}
            gap={'30px'}
            my="30px"
          >
            <Box
              bg={'#fff'}
              boxShadow={'md'}
              borderRadius={'10px'}
              p={'20px'}
              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
            >
              <Image src={sop1} h={'40px'} />
              <Text fontSize={'20px'} fontWeight={'bold'} py="20px">
                Dedicated Manager
              </Text>
              <Text textAlign={'center'}>
                Your Account Manager will hold regular check-ins and facilitate
                processes like RFI submissions
              </Text>
            </Box>

            <Box
              bg={'#fff'}
              boxShadow={'md'}
              borderRadius={'10px'}
              p={'20px'}
              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
            >
              <Image src={sop2} h={'40px'} />
              <Text fontSize={'20px'} fontWeight={'bold'} py="20px">
                Partner Portal access
              </Text>
              <Text textAlign={'center'}>
                You&apos;ll receive an invite to our Partner Portal, where you
                can complete training, register deals, and submit tickets.
              </Text>
            </Box>

            <Box
              bg={'#fff'}
              boxShadow={'md'}
              borderRadius={'10px'}
              p={'20px'}
              display={'flex'}
              flexDir={'column'}
              alignItems={'center'}
            >
              <Image src={sop3} h={'40px'} />
              <Text fontSize={'20px'} fontWeight={'bold'} py="20px">
                Marketing resources
              </Text>
              <Text textAlign={'center'}>
                You&apos;ll get access to marketing templates and
                vertical-specific assets to accelerate your software sales
              </Text>
            </Box>
          </Grid>
          <Flex justify={'center'} my="50px">
            <CustomButton
              btnText={'Get started'}
              bg={'blue.300'}
              borderRadius={'50px'}
              px={'20px'}
            />
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Partners
