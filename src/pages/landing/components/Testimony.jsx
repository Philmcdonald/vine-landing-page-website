import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Testimony = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]} bg={"#eee"}>
        <Box pb="50px">

        
      <Text
        fontSize={"40px"}
        pt="30px"
        textAlign={"center"}
        fontWeight={"bold"}
      >
        What Our Partners Say
      </Text>
      <Text
        textAlign={"center"}
        fontSize={"18px"}
        fontWeight={"medium"}
        pt="20px"
      >
        We make money when you make money.
      </Text>
      <Text textAlign={"center"} fontSize={"18px"} fontWeight={"medium"}>
        Our team is here to support you every step of the way.{" "}
      </Text>

      <Flex mt="30px" justifyContent={"center"} gap={"30px"}>
        <Box
          bg={"#fff"}
          borderRadius={"10px"}
          p="20px"
          maxW={"300px"}
          transition="transform 0.3s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
          cursor={"pointer"}
        >
          <Text fontSize={"25px"} fontWeight={"medium"}>
            Paul Ryan
          </Text>
          <Text fontWeight={"medium"}>CEO of EV Charger</Text>
          <Text pt="20px">
            "Obtaining CTEP certification [with ChargeLab] for our DirectPowerPS
            360 DC fast chargers is a significant achievement. It's a testament
            to our commitment to delivering cutting-edge, compliant charging
            solutions."
          </Text>
        </Box>
        <Box
          cursor={"pointer"}
          bg={"#fff"}
          borderRadius={"10px"}
          p="20px"
          maxW={"300px"}
          transition="transform 0.3s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Text fontSize={"25px"} fontWeight={"medium"}>
            Paul Ryan
          </Text>
          <Text fontWeight={"medium"}>CEO of EV Charger</Text>
          <Text pt="20px">
            "Obtaining CTEP certification [with ChargeLab] for our DirectPowerPS
            360 DC fast chargers is a significant achievement. It's a testament
            to our commitment to delivering cutting-edge, compliant charging
            solutions."
          </Text>
        </Box>
        <Box
         cursor={"pointer"}
          bg={"#fff"}
          borderRadius={"10px"}
          p="20px"
          maxW={"300px"}
          transition="transform 0.3s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Text fontSize={"25px"} fontWeight={"medium"}>
            Paul Ryan
          </Text>
          <Text fontWeight={"medium"}>CEO of EV Charger</Text>
          <Text pt="20px">
            "Obtaining CTEP certification [with ChargeLab] for our DirectPowerPS
            360 DC fast chargers is a significant achievement. It's a testament
            to our commitment to delivering cutting-edge, compliant charging
            solutions."
          </Text>
        </Box>
      </Flex>
      </Box>
    </Box>
  );
};

export default Testimony;
