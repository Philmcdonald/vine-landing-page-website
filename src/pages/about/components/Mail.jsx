import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ladder from "../../../assets/ladder.svg"


const Mail = () => {
  return (
    <Box
    p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    bg={"#fff"}
    justifyContent={"center"}
    h={"fit-content"}
    >
        <Text textAlign={"center"} fontSize={"30px"} fontWeight={"bold"}>Mailing address</Text>
        <Flex justify={"center"} gap={"50px"}my="50px">
            <Box borderRadius={"20px"} bg={"#fff"} boxShadow={"md"} p={"20px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Image src = {ladder} h={"50px"}/>
                <Text fontSize={"20px"} fontWeight={"bold"}>United States</Text>
                <Text>1049 El Monte Ave, Suite C #592</Text>
                <Text>Mountain View, CA 94040</Text>
            </Box>
            <Box borderRadius={"20px"} bg={"#fff"} boxShadow={"md"} p={"20px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
                <Image src = {ladder} h={"50px"}/>
                <Text fontSize={"20px"} fontWeight={"bold"}>Canada</Text>
                <Text>122 Judge Rd</Text>
                <Text>Etobicoke, ON M8Z 5B7</Text>
            </Box>
        </Flex>
    </Box>
  )
}

export default Mail