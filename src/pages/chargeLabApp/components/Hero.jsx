import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import { CustomButton } from "../../../components/CustomButton";
import { GrAppleAppStore } from "react-icons/gr";
import appImg from "../../../assets/appImg.webp"
import logoB from "../../../assets/logoB.png"
import logoW from "../../../assets/logoW.png"

const Hero = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      h={"100vh"}
    >
      <Navigation logo={logoB}/>
      < Flex mt="100px" >
       <Box maxW={"500px"} flex={1}>
        <Text fontSize={"60px"} fontWeight={"bold"}>Download the ChargeLab app</Text>
        <Text fontSize={"18px"} fontWeight={"medium"} py="20px" maxW={"300px"}>
        Click a button below to get the ChargeLab app for iOS or Android.
        </Text>
        <Flex mt="20px" align={"center"} gap={"30px"}>
            <CustomButton  btnText={"App Store"} bg={"none"} border={"1px solid #000"} borderRadius={"10px"}/>
            <CustomButton  btnText={"Google Play Store"} bg={"none"} border={"1px solid #000"} borderRadius={"10px"}/>
        </Flex>
       </Box>
      
      <Box flex={1}>
        <Image src={appImg} h={"800px"}/>
      </Box>
      
      </Flex>
    </Box>
  );
};

export default Hero;
