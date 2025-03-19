import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { CustomButton } from '../../../components/CustomButton'
import graphics2 from "../../../assets/graphic2.svg"

const Reseller = () => {
  return (
     <Flex bg={"blue.300"}  p={["20px 30px", "20px 30px", "20px 30px", "100px 150px"]} justify={"center"}  h={"fit-content"} gap={5}>
        <Box borderRadius={"20px"} p={"20px"}bg={"blue.100"} maxW={"600px"}>
            <Text fontSize={"23px"} color={"blue.300"} py="10px" fontWeight={"semi-bold"}>Limited Time Offer</Text>
            <Text fontSize={"30px"} color={"#000"} py="10px" fontWeight={"bold"}>Earn $1,000 in bonuses when you become a ChargeLab reseller. </Text>
            <Text fontSize={"17px"} fontWeight={"medium"} pb={"40px"}>We cut you a check for $500 when you deploy your first two ports. Refer your friends to this program, and get $500 more for each one that deploys two or more ports.</Text>
            <CustomButton btnText={"Become a reseller"} borderRadius={"50px"} bg={"blue.300"} color={"#fff"}/>
        </Box>
        <Box >
            <Image src={graphics2} />
        </Box>

     </Flex>
  )
}

export default Reseller