import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import m1 from '../../../assets/m1.svg'
import m2 from '../../../assets/m2.svg'
import m3 from '../../../assets/m3.svg'
import m4 from '../../../assets/m4.svg'

const Branded = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg="#f7f7f7"
      h={'fit-content'}
    >
      <Box my={'70px'} maxW={'600px'}>
        <Text color={'#8fc03f'} fontSize={'25px'} fontWeight={'bold'}>
          What's included
        </Text>
        <Text fontSize={'40px'} fontWeight={'bold'}>
          À la carte branded services
        </Text>
        <Text py="20px" fontSize={'20px'} fontWeight={'medium'}>
          ChargeLab white labeling is offered à la carte, meaning you can pick
          and choose only the services and user interfaces that are relevant for
          your brand.
        </Text>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={'300px'} color={'#000'}>
          <Image src={m1} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Web app
          </Text>
          <Text>The simplest EV charging interface, now with your brand.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={m2} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Mobile app
          </Text>
          <Text>A fully customized EV charging app for iOS and Android.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={m3} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Network cards
          </Text>
          <Text>
            The most affordable way to brand your EV charging experience.
          </Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={m4} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Dashboard
          </Text>
          <Text>Customize the portal your business customers use.</Text>
          {/* <CustomButton btnText={"Learn more"} color={"#8fc03f"} bg={"none"} px={"0px"}/> */}
        </Box>
      </Grid>
    </Box>
  )
}

export default Branded
