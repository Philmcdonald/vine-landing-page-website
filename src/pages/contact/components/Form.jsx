import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../../../components/Nav'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'

const Form = () => {
  return (
    <Box
    p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    bg={"#eee"}
    h={"fit-content"}
  >
    <Navigation />
    <Flex mt="100px" gap={"50px"}>
      <Box
        bg={"#fff"}
        p={"30px"}
        borderRadius={"10px"}
        boxShadow={"xl"}
        flex={1}
        zIndex={1}
      >
        <Flex align={"center"} gap={"10px"}>
          <FormInput label={"FIRST NAME"} />
          <FormInput label={"LAST NAME"} />
        </Flex>
        <Flex my={"20px"}>
          <FormInput label={"BUSINESS EMAIL "} />
        </Flex>
        <Flex align={"center"} gap={"10px"}>
          <FormInput label={"PHONE NUMBER"} />
          <FormInput label={"COMPANY NAME"} />
        </Flex>
        <Flex my={"20px"}>
          <FormInput label={"HOW CAN WE HELP YOU?"} lines={5} />
        </Flex>
        <Flex my={"30px"}>
          <CustomButton
            btnText={"submit"}
            color={"#fff"}
            bg={"blue.300"}
            w={"full"}
          />
        </Flex>
      </Box>
      <Box flex={1}>
        <Text fontWeight={"bold"} fontSize={"45px"}>
          Contact our team
        </Text>
        <Text my="20px" fontWeight={"medium"} fontSize={"20px"}>
          Reach out through this form if you are a business looking for EV
          charger management software or if you have feedback or product
          requests.
        </Text>
        <Text fontSize={"20px"} fontWeight={"medium"}>
        If you are a user who needs support, you have the following options:

        </Text>
        <Flex align={"start"} gap={"10px"} my="20px" fontWeight={"medium"} fontSize={"20px"}>
          <Text>1.</Text>
          <Text>24/7 Phone Support: Call us anytime at 1-800-636-0986 for immediate assistance.</Text>
        </Flex>

        <Flex align={"start"} gap={"10px"} my="20px" fontWeight={"medium"} fontSize={"20px"}>
          <Text>2.</Text>
          <Text>Submit a Ticket: Visit our ChargeLab customer support page to submit a ticket for non-urgent inquiries or specific requests. This option ensures your issue is tracked and addressed promptly by our team.
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Box>
  )
}

export default Form