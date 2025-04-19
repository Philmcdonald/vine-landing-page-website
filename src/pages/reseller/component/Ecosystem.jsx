import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import ec1 from "../../../assets/ec1.svg";
import ec2 from "../../../assets/ec2.svg";
import ec3 from "../../../assets/ec3.webp";
import ec4 from "../../../assets/ec4.svg";
import { CustomButton } from "../../../components/CustomButton";

const Ecosystem = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"teal"}
      //    bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
      color={"#fff"}
    >
      <Text
        align={"center"}
        fontSize={"40px"}
        fontWeight={"bold"}
        color={"#fff"}
      >
        Tap into our ecosystem
      </Text>
      <Text fontWeight={"medium"} fontSize={"18px"} textAlign={"center"}>
        Get access to best-in-class hardware, charger performance data, and a
        comprehensive software suite.{" "}
      </Text>
      <Flex align={"center"} justify={"center"} gap={"20px"} my="30px">
        <Box>
          <Image src={ec1} h={"40px"} />
          <Text fontWeight={"bold"} fontSize={"20px"} py="10px">
            Hardware savings
          </Text>
          <Text fontWeight={"medium"} fontSize={"18px"}>
            Leverage our manufacturing and distribution relationships to source
            high-quality chargers at preferred rates.{" "}
          </Text>
        </Box>
        <Box>
          <Image src={ec2} h={"40px"} />
          <Text fontWeight={"bold"} fontSize={"20px"} py="10px">
            Comprehensive software
          </Text>
          <Text fontWeight={"medium"} fontSize={"18px"}>
            Our system unlocks pricing and power management tools, carbon credit
            reporting, and 24/7 end user support.
          </Text>
        </Box>
        <Box>
          <Image src={ec3} h={"40px"} />
          <Text fontWeight={"bold"} fontSize={"20px"} py="10px">
            Data-driven expertise
          </Text>
          <Text fontWeight={"medium"} fontSize={"18px"}>
            With data from 12K connected chargers and deep industry experience,
            we can help you make strategic decisions.{" "}
          </Text>
        </Box>
        <Box>
          <Image src={ec4} h={"40px"} />
          <Text fontWeight={"bold"} fontSize={"20px"} py="10px">
            Extensive network
          </Text>
          <Text fontWeight={"medium"} fontSize={"18px"}>
            Lean on our network of expert service providers, installers, and
            electrical contractors in your area.
          </Text>
        </Box>
      </Flex>
      <Flex justify={"center"} my="50px">
        <CustomButton btnText={"Get started"} bg={"blue.300"} borderRadius={"50px"} px={"20px"}/>
      </Flex>
    </Box>
  );
};

export default Ecosystem;
