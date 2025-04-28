import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { CustomButton } from '../../../components/CustomButton'
import o1 from '../../../assets/o1.svg'
import o2 from '../../../assets/o2.svg'
import o3 from '../../../assets/o3.svg'
import o4 from '../../../assets/o4.svg'
import pump from '../../../assets/pump.svg'
import {
  CustomText,
  SubHeading,
  Wrapper,
  ReusableForm,
} from '../../../components'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Grid
          gridTemplateColumns={{ base: '', xl: '1fr 1fr' }}
          justify={'center'}
          gap={{ base: '50px', xl: '100px' }}
        >
          <ReusableForm />

          <Box flex={1}>
            <SubHeading>
              Find out more about public charging with Vine Mobility
            </SubHeading>
            <CustomText maxW={'400px'} py={{ base: '20px', xl: '30px' }}>
              Fill out the form to get in touch with one of our EV
              infrastructure experts.
            </CustomText>
            <Grid
              gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
              gap={{ base: '25px', xl: '30px' }}
              my={{ base: '20px', xl: '30px' }}
            >
              <Box>
                <Image src={o1} h={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  EV charger management
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by Vine Mobility.
                </Text>
              </Box>

              <Box>
                <Image src={o3} h={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Collect Revenue
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by Vine Mobility.
                </Text>
              </Box>

              <Box>
                <Image src={o2} h={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Turnkey install services
                </Text>
                <Text fontWeight={'medium'}>
                  Hardware, software, and install services all in one place.
                </Text>
              </Box>

              <Box>
                <Image src={o4} h={{ base: '35px', md: '40px' }} />
                <Text fontWeight={'bold'} py="10px">
                  Be discovered
                </Text>
                <Text fontWeight={'medium'}>
                  Put your site on every major Ev changing map.
                </Text>
                <Link to={'/enterprise-software'}>
                  <CustomButton
                    btnText={'All software features'}
                    bg={'transparent'}
                    p={'0px'}
                    color={'#8fc03f'}
                  />
                </Link>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Wrapper>

      <Box bg={'#000'} justifyContent={'center'}>
        <Wrapper>
          <Image mx={'auto'} src={pump} h={'350px'} />
        </Wrapper>
      </Box>
    </Box>
  )
}

export default Form
