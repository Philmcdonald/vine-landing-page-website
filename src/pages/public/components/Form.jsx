import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import FormInput from '../../../components/FormInput'
import { CustomButton } from '../../../components/CustomButton'
import o1 from "../../../assets/o1.svg"
import o2 from "../../../assets/o2.svg"
import o3 from "../../../assets/o3.svg"
import o4 from "../../../assets/o4.svg"
import pump from "../../../assets/pump.svg"


const Form = () => {
  return (
    <Box
          p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
          bg={"#eee"}
          justifyContent={"center"}
          h={"fit-content"}
        >
        <Flex my="70px" justify={"center"} gap={"100px"}>
            <Box bg={"#fff"} p={"30px"} borderRadius={"10px"} border={'1px solid #eee'} boxShadow={"lg"} flex={1}>
                <Flex align={"center"} gap={"10px"}>
                  <FormInput label={"FIRST NAME"}/>  
                  <FormInput label={"LAST NAME"}/>
                </Flex>
                <Flex my={"20px"}>
                    <FormInput label={"BUSINESS EMAIL "}/>
                </Flex>
                <Flex align={"center"} gap={"10px"}>
                  <FormInput label={"PHONE NUMBER"}/>  
                  <FormInput label={"COMPANY NAME"}/>
                </Flex>
                <Flex my={"20px"}>
                    <FormInput label={"HOW CAN WE HELP YOU?"} lines={5}/>
                </Flex>
                <Flex my={"30px"}>
                    <CustomButton btnText={"submit"} color={"#fff"} bg={"blue.300"} w={"full"}/>
                </Flex>
    
            </Box>
    
            <Box flex={1}>
                <Text fontSize={"30px"} fontWeight={"bold"}>Find out more about public charging with ChargeLab
                </Text>
                <Text maxW={"400px"} fontWeight={"medium"} fontSize={"18px"} py="10px">
                Fill out the form to get in touch with one of our EV infrastructure experts.
                </Text>
                <Flex my="30px">
                    <Box>
                        <Image src={o1} h={"50px"}/>
                        <Text fontWeight={"bold"} py="10px">EV charger management</Text>
                        <Text fontWeight={"medium"}>Connect & control any OCPP EV charger that has been approved by ChargeLab.</Text>
                        <CustomButton btnText={"Compatible hardware"} color={"blue.300"} fontWeight="bold" px={"0px"} fontSize={"18px"} />
                    </Box>

                    <Box>
                        <Image src={o2} h={"50px"}/>
                        <Text fontWeight={"bold"} py="10px">Turnkey install services</Text>
                        <Text fontWeight={"medium"}>Hardware, software, and install services all in one place.</Text>
                        <CustomButton btnText={"Learn more"} color={"blue.300"} fontWeight="bold" px={"0px"} fontSize={"18px"} />
                    </Box>
                </Flex>
                <Flex >
                    <Box>
                        <Image src={o3} h={"50px"}/>
                        <Text fontWeight={"bold"} py="10px">Collect Revenue</Text>
                        <Text fontWeight={"medium"}>Connect & control any OCPP EV charger that has been approved by ChargeLab.</Text>
                        
                    </Box>

                    <Box>
                        <Image src={o4} h={"50px"}/>
                        <Text fontWeight={"bold"} py="10px">Be discovered</Text>
                        <Text fontWeight={"medium"}>Hardware, software, and install services all in one place.</Text>
                        <CustomButton btnText={"All software features"} color={"blue.300"} fontWeight="bold" px={"0px"} fontSize={"18px"} />
                    </Box>
                </Flex>
            </Box>
    
        </Flex>
        <Flex justifyContent={"center"}>
                <Image src={pump} h={"350px"}/>
        </Flex>
        </Box>
  )
}

export default Form