import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import logoB from "../../../assets/logoB.png"
import logoW from "../../../assets/logoW.png"

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgGradient="linear(to-r, teal.500, green.500)"
      h={"fit-content"}
    >
      <Navigation logo={logoW} color={"#fff"} loginColor={"#fff"} loginTextColor={"#fff"} />

      <Box color={"#fff"} my="70px">
        <Text fontSize={"60px"} fontWeight={"bold"}>
          Pricing that scales for EV charger management
        </Text>
        <Text fontWeight={"medium"} fontSize={"18px"} my={"20px"} maxW={"800px"} >
          ChargeLab network services can be purchased from an authorized
          reseller. If you are an EV charger manufacturer, network operator, or
          turnkey installer of EV chargers, contact us directly for pricing.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero;
