import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import m1 from "../../../assets/GS1.svg"
import m2 from "../../../assets/GS2.svg"
import g from "../../../assets/GS3.svg"


const GetStarted = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg="#fff"
      h={"fit-content"}
    >
      <Flex justify={"space-between"} my="50px">
        <Box flex={1} maxW={"500px"}>
          <Text fontSize={"30px"} fontWeight={"bold"}>Get started with white labeled EV charging</Text>
          <Text fontSize={"18px"} fontWeight={"medium"}>
            Contact us today to get a quote on launching an EV charging service
            with your brand.
          </Text>
          <CustomButton btnText={"Contact us"} />
        </Box>

        <Box maxW={"300px"} color={"#000"} flex={1}>
          <Image src={m1} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          Any EV charger
          </Text>
          <Text>Like all our services, white labeling is hardware agnostic.</Text>
          <CustomButton btnText={"see hardware"} bg={"none"} px="0px" color={"blue.300"} fontSize={"20px"}/>
        </Box>

        <Box maxW={"300px"} color={"#000"} flex={1}>
          <Image src={m2} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          Fully customizable
          </Text>
          <Text>Go beyond branding with custom features & functionality.</Text>
          <CustomButton btnText={"contact us"} bg={"none"} px="0px" color={"blue.300"} fontSize={"20px"}/>
        </Box>
      </Flex>
      <Flex justifyContent={"center"}>
        <Image src={g} h={"350px"}/>
      </Flex>
    </Box>
  );
};

export default GetStarted;
