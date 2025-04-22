import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'
import o1 from '../../../assets/o1.svg'
import o2 from '../../../assets/o2.svg'
import o3 from '../../../assets/o3.svg'
import o4 from '../../../assets/o4.svg'
import Wrapper from '../../../components/Wrapper'
import { CustomText, SubHeading } from '../../../components'

const Form = () => {
  return (
    <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          justify={'center'}
          gap={{ base: '50px', xl: '100px' }}
        >
          <Box
            bg={'#fff'}
            p={'30px'}
            borderRadius={'10px'}
            border={'1px solid #eee'}
            boxShadow={'lg'}
            flex={1}
          >
            <Flex align={'center'} gap={'10px'}>
              <FormInput label={'FIRST NAME'} />
              <FormInput label={'LAST NAME'} />
            </Flex>
            <Flex my={'20px'}>
              <FormInput label={'BUSINESS EMAIL '} />
            </Flex>
            <Flex align={'center'} gap={'10px'}>
              <FormInput label={'PHONE NUMBER'} />
              <FormInput label={'COMPANY NAME'} />
            </Flex>
            <Flex my={'20px'}>
              <FormInput label={'HOW CAN WE HELP YOU?'} lines={5} />
            </Flex>
            <Flex my={'30px'}>
              <CustomButton
                btnText={'submit'}
                color={'#fff'}
                bg={'blue.300'}
                w={'full'}
              />
            </Flex>
          </Box>

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
                <Image src={o1} h={'50px'} />
                <Text fontWeight={'bold'} py="10px">
                  EV charger management
                </Text>
                <Text fontWeight={'medium'}>
                  Connect & control any OCPP EV charger that has been approved
                  by ChargeLab.
                </Text>
                <CustomButton
                  btnText={'Compatible hardware'}
                  color={'blue.300'}
                  fontWeight="bold"
                  px={'0px'}
                  fontSize={'18px'}
                />
              </Box>

              <Box>
                <Image src={o2} h={'50px'} />
                <Text fontWeight={'bold'} py="10px">
                  Turnkey install services
                </Text>
                <Text fontWeight={'medium'}>
                  Hardware, software, and install services all in one place.
                </Text>
                <CustomButton
                  btnText={'Learn more'}
                  color={'blue.300'}
                  fontWeight="bold"
                  px={'0px'}
                  fontSize={'18px'}
                />
              </Box>

              <Box>
                <Image src={o3} h={'50px'} />
                <Text fontWeight={'bold'} py="10px">
                  Collect Revenue
                </Text>
                <Text fontWeight={'medium'}>
                  Set end-user fees and accept any major credit card.
                </Text>
              </Box>

              <Box>
                <Image src={o4} h={'50px'} />
                <Text fontWeight={'bold'} py="10px">
                  Manage power
                </Text>
                <Text fontWeight={'medium'}>
                  Advanced energy management & active load balancing.
                </Text>
                <CustomButton
                  btnText={'All software features'}
                  color={'blue.300'}
                  fontWeight="bold"
                  px={'0px'}
                  fontSize={'18px'}
                />
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
