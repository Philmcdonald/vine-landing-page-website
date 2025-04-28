import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import charger1 from '../../../assets/charger1.webp'
import charger2 from '../../../assets/charger2.webp'
import charger3 from '../../../assets/charger3.webp'
import charger4 from '../../../assets/charger4.webp'
import Wrapper from '../../../components/Wrapper'
import { CustomText, InfoHeading, SubHeading } from '../../../components'

const Recommendation = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <InfoHeading>Recommended hardware</InfoHeading>
          <SubHeading>Top EV Chargers for Workplaces</SubHeading>
          <CustomText>
            VineCharge supports all OCPP-compliant chargers. Here are some great
            options for keeping your team or visitors charged at work.
          </CustomText>
        </Box>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: 'repeat(4,1fr)' }}
          justify={'center'}
          gap={'50px'}
          mt="50px"
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
