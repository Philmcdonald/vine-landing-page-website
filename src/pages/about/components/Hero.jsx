import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import AboutImage from "../../../assets/aboutImg.webp" 

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      //    bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Navigation />
      <Box mt="100px" textAlign={"center"}>
        <Text fontSize={"60px"} fontWeight={"bold"}>
          ChargeLab’s mission is to build EV charging solutions that scale
        </Text>
        <Text fontWeight={"medium"} fontSize={"18px"} py={"20px"} maxW={"700px"} margin={"0px auto"}>
          This means making EV charger deployment fast and affordable. And
          making charging easy and reliable for every EV driver.
        </Text>
      </Box>
      <Flex justify={"center"} mt="50px">
        <Image src={AboutImage}  h={"500px"} borderRadius={"20px"}/>
      </Flex>
    </Box>
  );
};

export default Hero;
