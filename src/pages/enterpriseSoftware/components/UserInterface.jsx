import { Box, Grid, Image, Text } from '@chakra-ui/react'

import u3 from '../../../assets/u3.svg'
import u4 from '../../../assets/u4.svg'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText, Wrapper } from '../../../components'
import { userInterface } from '../data'

const UserInterface = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'}>
      <Wrapper>
        <Box maxW={'600px'}>
          <Text fontSize={'40px'} fontWeight={'bold'}>
            End-User Interfaces
          </Text>
          <CustomText py="20px">
            We’re big on user experience because EV charging should be simple,
            smooth, and stress-free.
          </CustomText>
        </Box>

        <Grid
          templateColumns={{ base: '1fr', xl: 'repeat(4, 1fr)' }}
          gap={10}
          my="50px"
        >
          {userInterface.map(({ title, src, content }) => {
            return (
              <Box color={'#000'} key={title}>
                <Image
                  src={src}
                  h={{ base: '38px', md: '40px' }}
                  mb={{ base: '10px', md: '' }}
                />
                <Text
                  py="10px"
                  fontSize={{ base: '16px', md: '15px' }}
                  fontWeight={'bold'}
                >
                  {title}
                </Text>
                <Text fontSize={{ base: '14px', md: '14px' }}>{content}</Text>
              </Box>
            )
          })}

          <Box color={'#000'}>
            <Image
              src={u3}
              h={{ base: '38px', md: '40px' }}
              mb={{ base: '10px', md: '' }}
            />
            <Text
              py="10px"
              fontSize={{ base: '16px', md: '15px' }}
              fontWeight={'bold'}
            >
              iOS & Android apps
            </Text>
            <Text fontSize={{ base: '14px', md: '14px' }}>
              Drive brand loyalty with a mobile application.
            </Text>
            <CustomButton
              btnText={'Get the ChargeLab app'}
              color={'blue.300'}
              bg={'none'}
              px={'0px'}
            />
          </Box>

          <Box color={'#000'}>
            <Image
              src={u4}
              h={{ base: '38px', md: '40px' }}
              mb={{ base: '10px', md: '' }}
            />
            <Text
              py="10px"
              fontSize={{ base: '16px', md: '15px' }}
              fontWeight={'bold'}
            >
              RFID cards
            </Text>
            <Text fontSize={{ base: '14px', md: '14px' }}>
              A tried & true method for end-user authentication.
            </Text>
            <CustomButton
              btnText={'View network cards'}
              color={'blue.300'}
              bg={'none'}
              px={'0px'}
            />
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default UserInterface
