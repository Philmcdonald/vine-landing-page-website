import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import sop1 from "../../../assets/sop1.svg"
import sop2 from "../../../assets/sop2.svg"
import sop3 from "../../../assets/sop3.svg"
import { CustomButton } from '../../../components/CustomButton'

const Partners = () => {
  return (
    <Box 
    p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    bg={"#eee"}
    //    bgGradient="linear(to-r, teal.500, green.500)"
    justifyContent={"center"}
    h={"fit-content"}
    
    >
        <Box>
            <Text fontSize={"40px"} fontWeight={"bold"} textAlign={"center"}>How we support our partners</Text>
            <Flex justify={"center"} align={"center"} gap={"30px"} my="30px">
                <Box bg={"#fff"} boxShadow={"md"} borderRadius={"10px"} p={"20px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <Image src={sop1} h={"40px"}/>
                    <Text fontSize={"20px"} fontWeight={"bold"} py="20px">Dedicated Manager</Text>
                    <Text textAlign={"center"}>Your Account Manager will hold regular check-ins and facilitate processes like RFI submissions</Text>
                </Box>

                <Box bg={"#fff"} boxShadow={"md"} borderRadius={"10px"} p={"20px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <Image src={sop2} h={"40px"}/>
                    <Text fontSize={"20px"} fontWeight={"bold"} py="20px">Partner Portal access</Text>
                    <Text textAlign={"center"}>You'll receive an invite to our Partner Portal, where you can complete training, register deals, and submit tickets.

</Text>
                </Box>

                <Box bg={"#fff"} boxShadow={"md"} borderRadius={"10px"} p={"20px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                    <Image src={sop3} h={"40px"}/>
                    <Text fontSize={"20px"} fontWeight={"bold"} py="20px">Marketing resources</Text>
                    <Text textAlign={"center"}>You'll get access to marketing templates and vertical-specific assets to accelerate your software sales</Text>
                </Box>

            </Flex>
             <Flex justify={"center"} my="50px">
                    <CustomButton btnText={"Get started"} bg={"blue.300"} borderRadius={"50px"} px={"20px"}/>
                  </Flex>
        </Box>
    </Box>
  )
}

export default Partners