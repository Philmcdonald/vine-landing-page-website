import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import logoB from "../../../assets/logoB.png"
import logoW from "../../../assets/logoW.png"

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      // bg={"#eee"}
      bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Navigation logo={logoW} color={"#fff"} loginColor={"#fff"} loginTextColor={"#fff"} />
      <Box maxW={"600px"} color={"#fff"} my="70px">
        <Text fontSize={"60px"} fontWeight={"bold"}>Integrations</Text>
        <Text fontWeight={"medium"} fontSize={"18px"} my={"20px"}>
          Extend the capabilities of your EV infrastructure with integrations.
          Many of the integrations listed below are available exclusively
          through ChargeLab's EV charging OS.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
