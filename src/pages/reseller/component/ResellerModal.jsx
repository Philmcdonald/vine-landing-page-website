import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'

const ResellerModal = () => {
  return (
    <Box>
      <Text fontSize={'25px'} fontWeight={'bold'} textAlign={'center'}>
        Let's start with some information about you.
      </Text>
      <Box>
        <FormInput label={'Email'} />

        <Flex my="20px" gap={'20px'}>
          <FormInput label={'First Name'} />
          <FormInput label={'Last Name'} />
        </Flex>
        <Flex>
          <FormInput label={'Phone Number'} />
        </Flex>
        <Box my="30px">
          <CustomButton
            btnText={'Submit'}
            w={'full'}
            bg={'teal'}
            py={'10px'}
            color={'#fff'}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default ResellerModal
