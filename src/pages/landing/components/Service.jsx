import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Service = () => {
  return (
    <Box
      bg={"#eee"}
      p={["20px 30px", "20px 30px", "20px 30px", "200px 20px 150px"]}
      mt="-150px"
      h={"fit-content"}
      gap={"50px"}
      
      
    >
      <Flex align={"center"} justifyContent={"center"} >
     
      <Box bg={"#fff"} borderRadius={"10px"} p={"20px"} maxW={"500px"} margin={"0px auto"}>
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
          .
        </Text>
      </Box>
    
      <Box bg={"#fff"} borderRadius={"10px"} p={"20px"}  maxW={"500px"} margin={"0px auto"}>
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
    </Box>
  );
};

export default Service;
