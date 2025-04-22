import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'
import { form } from '../data'
import { CustomText, SubHeading, Wrapper } from '../../../components'

const Form = () => {
  return (
    <Box bg={'#eee'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Grid
          gridTemplateColumns={{ base: '', xl: '1fr 1fr' }}
          gap={{ base: '', xl: '50px' }}
          justify={'space-between'}
        >
          <Box bg={'#fff'} p={'30px'} borderRadius={'10px'}>
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

          <Box mt={{ base: '30px', xl: '0px' }}>
            <SubHeading>Integrate with ChargeLab</SubHeading>
            <CustomText maxW={'400px'} py={{ base: '20px', xl: '20px' }}>
              Help us build better EV infrastructure, smarter buildings, and a
              smarter grid.
            </CustomText>
            <Grid
              templateColumns={{ base: '1fr', xl: 'repeat(2, 1fr)' }}
              gap={10}
              my={{ base: '30px', xl: '50px' }}
            >
              {form.map(({ title, img, content }) => {
                return (
                  <Box color={'#000'} key={title}>
                    <Image
                      src={img}
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
                    <Text fontSize={{ base: '14px', md: '14px' }}>
                      {content}
                    </Text>
                  </Box>
                )
              })}
            </Grid>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Form
