import { Box, Flex, Grid } from '@chakra-ui/react'
import Navigation from '../../../components/Nav'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'
import { CustomText, SubHeading, Wrapper } from '../../../components'

const Form = () => {
  return (
    <Box bg={'#eee'} h={'fit-content'}>
      <Wrapper
        py={{
          base: '10px',
          xl: '30px',
        }}
        pb={{
          base: '10px',
          xl: '100px',
        }}
      >
        <Navigation />
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
          mt={{ base: '30px', xl: '100px' }}
          gap={'50px'}
        >
          <Box
            bg={'#fff'}
            p={'30px'}
            borderRadius={'10px'}
            boxShadow={'xl'}
            flex={1}
            zIndex={1}
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
            <SubHeading>Contact our team</SubHeading>
            <CustomText my="20px">
              Reach out through this form if you are a business looking for EV
              charger management software or if you have feedback or product
              requests.
            </CustomText>
            <CustomText>
              If you are a user who needs support, you have the following
              options:
            </CustomText>
            <Flex
              align={'start'}
              gap={'10px'}
              my="20px"
              fontWeight={'medium'}
              fontSize={'20px'}
            >
              <CustomText>1.</CustomText>
              <CustomText>
                24/7 Phone Support: Call us anytime at 1-800-636-0986 for
                immediate assistance.
              </CustomText>
            </Flex>

            <Flex
              align={'start'}
              gap={'10px'}
              my="20px"
              fontWeight={'medium'}
              fontSize={'20px'}
            >
              <CustomText>2.</CustomText>
              <CustomText>
                Submit a Ticket: Visit our ChargeLab customer support page to
                submit a ticket for non-urgent inquiries or specific requests.
                This option ensures your issue is tracked and addressed promptly
                by our team.
              </CustomText>
            </Flex>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
