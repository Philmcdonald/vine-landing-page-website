import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import { CustomButton } from "../../../components/CustomButton";
import p1 from "../../../assets/p1.jpg"

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      // bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Navigation />
      <Flex mt="70px" justify={"space-between"}>
        <Box maxW={"600px"}>
          <Text fontWeight={"bold"} fontSize={"50px"}>Public EV charging solutions</Text>
          <Text fontWeight={"medium"} fontSize={"20px"} py="30px">
            As the world goes electric, shopping malls, restaurants, and
            community centers will become the refuelling stations of the future.
            ChargeLab offers most frictionless public charging experience for
            both site hosts and EV drivers.
          </Text>
          <Flex align={"center"} gap={"30px"}>  
            <CustomButton btnText={"Contact us"} bg={"blue.300"} color={"#fff"} fontSize={"20px"} borderRadius={"50px"}/>
            <CustomButton btnText={"see pricing"} bg={"none"} fontSize={"20px"} color={"blue.300"}/>
            
          </Flex>

        </Box>
        <Box>
            <Image src={p1} h={"400px"} borderRadius={"20px"}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
