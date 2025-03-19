import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import { CustomButton } from "../../../components/CustomButton";
import heroBg from "../../../assets/heroImage.jpg";
import graphic1 from "../../../assets/graphic1.svg";
import logoB from "../../../assets/logoB.png";
import logoW from "../../../assets/logoW.png";

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgGradient="linear(to-r, teal.500, green.500)"
      h={"fit-content"}
      clipPath="polygon(0 0, 100% 0, 100% 80%, 0 100%)"
    //   font-family=" Inter, sans-serif"
   
    >
      <Navigation
        logo={logoW}
        bg={"none"}
        color={"#fff"}
        loginTextColor={"#fff"}
        loginColor={"#fff"}
        iconColor={"#fff"}
      />
      <Flex my="50px" align={"center"} gap={"30px"}>
        <Box color={"#fff"} flex={1}>
          <Text fontSize={"60px"} fontWeight={"bold"} >
            Software for EV charging businesses
          </Text>
          <Text pt={"20px"} pb={"30px"} fontSize={"20px"}>
            ChargeLab is the operating system for EV charges. We're the backend
            software powering North America's leading EV charger manufacturers,
            turnkey installers, and network operators.
          </Text>
          <CustomButton
            px={"30px"}
            borderRadius={"50px"}
            btnText={"Contact us"}
            bg={"#000"}
            color={"#fff"}
          />
        </Box>

        <Box flex={1} mb={"30px"}>
          <Image src={graphic1} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
