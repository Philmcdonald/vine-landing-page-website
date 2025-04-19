import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import evCharge from "../../../assets/evCharge.webp"

const EvCharge = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      //    bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Flex align={"center"} justify={"center"} gap={"100px"} my="50px">
        <Box maxW={"500px"}>
          <Text fontSize={"50px"} fontWeight={"bold"}>Your EV charging solutions partner</Text>
          <Text fontSize={"18px"} py="30px" fontWeight={"medium"}>
            Partnership can be powerful. We help you access hardware inventory
            with exclusive pricing, win more RFPs, offload support, and make
            more money without reinventing your business.
          </Text>
          <CustomButton btnText={"See pricing"} bg={"teal"} borderRadius={"50px"} color={"#fff"}/>
        </Box>
        <Box>
            <Image src ={evCharge} />
        </Box>
      </Flex>
    </Box>
  );
};

export default EvCharge;
