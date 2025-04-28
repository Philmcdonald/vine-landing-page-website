import { Box, Flex, Grid } from '@chakra-ui/react'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText, SubHeading, Wrapper } from '../../../components'

const Form = () => {
  return (
    <Box bg={'#000'} justifyContent={'center'} h={'fit-content'}>
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
            border={'1px solid #f7f7f7'}
            boxShadow={'lg'}
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
                bg={'#8fc03f'}
                w={'full'}
              />
            </Flex>
          </Box>

          <Box color={'#fff'}>
            <SubHeading>Let&apos;s get started</SubHeading>
            <CustomText py={{ base: '15px', xl: '20px' }} maxW={'400px'}>
              EV charging doesn&apos;t have to be complicated. ChargeLab is your
              end-to-end EV infrastructure solution.
            </CustomText>
            {/* <Grid templateColumns='repeat(2, 1fr)' gap={10} my="50px">
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form1} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Powerful platform
                        </Text>
                        <Text>
                        ChargeLab's CSMS has dozens of features and capabilities
                        </Text>
                      </Box>

                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form2} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        One point for any EV charger
                        </Text>
                        <Text>
                        With a single integration, ChargeLab gives you access to dozens of EV chargers
                        </Text>
                      </Box>
            
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form3} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Great distribution
                        </Text>
                        <Text>
                        Access dozens of channel partners and thousands of customers through the ChargeLab platform. 
                        </Text>
                      </Box>
            
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form4} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Well-documented APIs
                        </Text>
                        <Text>
                        Access our robust, flexible, and ever-improving APIs.
                        </Text>
                      </Box>
            
                      
                    </Grid> */}
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
