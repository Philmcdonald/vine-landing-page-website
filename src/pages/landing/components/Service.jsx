import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Service = () => {
  return (
    <Flex
      bg={"#eee"}
      p={["20px 30px", "20px 30px", "20px 30px", "50px 150px"]}
      h={"fit-content"}
      gap={5}
      
    >
      <Box bg={"#fff"} borderRadius={"10px"} p={"20px"} flex={1}>
        <Text
          fontSize="25px"
          textAlign={"center"}
          fontWeight={"bold"}
          py={"10px"}
        >
          Solution Providers
        </Text>
        <Text fontSize={"20px"}>
          If your sell or install EV Chargers, operate a charging network or
          manage a large fleet, learn about our{" "}
          <span style={{ color: "blue" }}>enterprise software</span>
          and <span style={{ color: "blue" }}>white-label solutions</span>.
        </Text>
      </Box>
      <Box bg={"#fff"} borderRadius={"10px"} p={"20px"} flex={1}>
        <Text
          fontSize="25px"
          py={"10px"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Site Managers
        </Text>
        <Text fontSize={"20px"}>
          If your sell or install EV Chargers, operate a charging network or
          manage a large fleet, learn about our{" "}
          <span style={{ color: "blue" }}>enterprise software</span>
          and <span style={{ color: "blue" }}>white-label solutions</span>.
        </Text>
      </Box>
      <Box bg={"#fff"} borderRadius={"10px"} p={"20px"} flex={1}>
        <Text
          fontSize="25px"
          py={"10px"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          EV Drivers
        </Text>
        <Text fontSize={"20px"}>
          If your sell or install EV Chargers, operate a charging network or
          manage a large fleet, learn about our{" "}
          <span style={{ color: "blue" }}>enterprise software</span>
          and <span style={{ color: "blue" }}>white-label solutions</span>.
        </Text>
      </Box>
    </Flex>
  );
};

export default Service;
