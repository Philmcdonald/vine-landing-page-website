import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import w1 from '../../../assets/w1.svg'
import w2 from '../../../assets/w2.svg'
import w3 from '../../../assets/w3.svg'
import w4 from '../../../assets/w4.svg'
import { CustomButton } from '../../../components/CustomButton'

const UseCase = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg="#fff"
      h={'fit-content'}
    >
      <Box my={'70px'} maxW={'600px'}>
        <Text color={'#8fc03f'} fontSize={'25px'} fontWeight={'bold'}>
          Who is it for?
        </Text>
        <Text fontSize={'40px'} fontWeight={'bold'}>
          White labeling for any use case
        </Text>
        <Text py="20px" fontSize={'20px'} fontWeight={'medium'}>
          Branding your own EV charging services is valuable for a range of
          organizations, from private companies to governments and public
          utilities. ChargeLab makes white labeling easy and affordable for any
          organization
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={'300px'} color={'#000'}>
          <Image src={w1} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Charge point operators (CPOs)
          </Text>
          <Text>
            Use ChargeLab to power your EV charging network build-out.
          </Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={w2} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Utilities
          </Text>
          <Text>
            Expand your reach by building a branded EV charging experience.
          </Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={w3} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Governments
          </Text>
          <Text>Invest in both e-mobility adoption and your brand.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={w4} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Private companies
          </Text>
          <Text>White label solutions for any other business case.</Text>
          {/* <CustomButton btnText={"Learn more"} color={"#8fc03f"} bg={"none"} px={"0px"}/> */}
        </Box>
      </Grid>
    </Box>
  )
}

export default UseCase
