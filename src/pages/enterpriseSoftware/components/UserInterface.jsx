import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import u1 from '../../../assets/u1.svg'
import u2 from '../../../assets/u2.svg'
import u3 from '../../../assets/u3.svg'
import u4 from '../../../assets/u4.svg'
import { CustomButton } from '../../../components/CustomButton'

const UserInterface = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg={'#fff'}
      justifyContent={'center'}
      // h={"100vh"}
    >
      <Box mt={'70px'} maxW={'600px'}>
        <Text fontSize={'40px'} fontWeight={'bold'}>
          End-User Interfaces
        </Text>
        <Text fontSize={'18px'} fontWeight={'medium'} py="20px">
          Obsessed with end-user interface? So are we.
        </Text>
      </Box>

      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={'300px'} color={'#000'}>
          <Image src={u1} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            White-labeling
          </Text>
          <Text>Add your logo and customize UI colors to match your brand.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={u2} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            Web app
          </Text>
          <Text>Deliver a seamless charging experience with a QR scan.</Text>
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={u3} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            iOS & Android apps
          </Text>
          <Text>Drive brand loyalty with a mobile application.</Text>
          <CustomButton
            btnText={'Get the ChargeLab app'}
            color={'blue.300'}
            bg={'none'}
            px={'0px'}
          />
        </Box>
        <Box maxW={'300px'} color={'#000'}>
          <Image src={u4} h={'50px'} />
          <Text py="10px" fontSize={'18px'} fontWeight={'bold'}>
            RFID cards
          </Text>
          <Text>A tried & true method for end-user authentication.</Text>
          <CustomButton btnText={'View network cards'} color={'blue.300'} bg={'none'} px={'0px'} />
        </Box>
      </Grid>
    </Box>
  )
}

export default UserInterface
