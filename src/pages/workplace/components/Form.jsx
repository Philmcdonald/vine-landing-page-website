import { Box, Grid, Image, Text } from '@chakra-ui/react'
import { CustomButton } from '../../../components/CustomButton'
import o1 from '../../../assets/o1.svg'
import o2 from '../../../assets/o2.svg'
import o3 from '../../../assets/o3.svg'
import Wrapper from '../../../components/Wrapper'
import { CustomText, ReusableForm, SubHeading } from '../../../components'

const Form = () => {
  return (
    <Box bg={'#f7f7f7'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          justify={'center'}
          gap={{ base: '50px', xl: '100px' }}
        >
          <ReusableForm />

          <Box flex={1}>
            <SubHeading fontSize={'30px'} fontWeight={'bold'}>
              Let&apos;s get started
            </SubHeading>
            <CustomText maxW={'400px'} py="10px">
              Fill out the form to get in touch with one of VineCharge&apos;s EV
              infrastructure experts. We power electric vehicle charging at
              hundreds of workplaces around the world.
            </CustomText>
            <Grid
              gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
              gap={{ base: '30px', xl: '50px' }}
              my="30px"
            >
              <Box>
                <Image src={o1} h={'40px'} />
                <Text fontWeight={'bold'} py="10px">
                  EV charger management
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by ChargeLab.
                </Text>
                <CustomButton
                  btnText={'Compatible hardware'}
                  bg={'none'}
                  color={'#8fc03f'}
                  fontWeight="bold"
                  px={'0px'}
                  fontSize={'18px'}
                />
              </Box>

              <Box>
                <Image src={o2} h={'40px'} />
                <Text fontWeight={'bold'} py="10px">
                  Turnkey install services
                </Text>
                <Text fontWeight={'medium'}>
                  Hardware, software, and install services all in one place.
                </Text>
                <CustomButton
                  btnText={'Learn more'}
                  color={'#8fc03f'}
                  bg={'none'}
                  fontWeight="bold"
                  px={'0px'}
                  fontSize={'18px'}
                />
              </Box>

              <Box>
                <Image src={o3} h={'40px'} />
                <Text fontWeight={'bold'} py="10px">
                  Collect Revenue
                </Text>
                <Text fontWeight={'medium'}>
                  Set end-user fees and accept any major credit card.
                </Text>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
