import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import charger1 from '../../../assets/charger1.webp'
import charger2 from '../../../assets/charger2.webp'
import charger3 from '../../../assets/charger3.webp'
import charger4 from '../../../assets/charger4.webp'
import {
  CustomText,
  InfoHeading,
  SubHeading,
  Wrapper,
} from '../../../components'

const Recommendation = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <InfoHeading color="blue.300">Recommended hardware</InfoHeading>
          <SubHeading py={{ base: '15px', xl: '20px' }}>
            The best EV chargers for public sites
          </SubHeading>
          <CustomText>
            vinecharge&apos;s platform works with any OCPP-compliant EV charger.
            Below are our top recommendations for public EV chargers. You can
            sort by charger type.
          </CustomText>
        </Box>

        <Grid
          gap={{ base: '30px', xl: '40px' }}
          my={{ base: '40px', xl: '50px' }}
          gridTemplateColumns={{ base: '', xl: 'repeat(4, 1fr)' }}
        >
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image src={charger1} h={'200px'} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image src={charger2} h={'200px'} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image src={charger3} h={'200px'} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
          <Box
            bg={'#fff'}
            borderRadius={'20px'}
            boxShadow={'2xl'}
            p="20px"
            transition="transform 0.5s ease" // Smooth transition for the rotation
            _hover={{ transform: 'scale(1.1)' }} // Rotate by 90 degrees on hover
          >
            <Image src={charger4} h={'200px'} />
            <Text fontSize={'20px'} fontWeight={'bold'} py="10px">
              Wallbox Supernova
            </Text>
            <Flex
              justify={'space-between'}
              fontSize={'17px'}
              color={'#ccc'}
              fontWeight={'medium'}
            >
              <Text>HPC</Text>
              <Text>60-220KW</Text>
            </Flex>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Recommendation
