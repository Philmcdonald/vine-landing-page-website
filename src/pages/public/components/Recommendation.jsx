import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import charger1 from "../../../assets/charger1.webp";
import charger2 from "../../../assets/charger2.webp";
import charger3 from "../../../assets/charger3.webp";
import charger4 from "../../../assets/charger4.webp";

const Recommendation = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Box maxW={"600px"} mt={"70px"}>
        <Text color="blue.300" fontWeight={"bold"} fontSize={"25px"}>
          Recommended hardware
        </Text>
        <Text fontSize={"30px"} fontWeight={"bold"} py="20px">
          The best EV chargers for public sites
        </Text>
        <Text fontWeight={"medium"} fontSize={"20px"}>
          ChargeLab's platform works with any OCPP-compliant EV charger. Below
          are our top recommendations for public EV chargers. You can sort by
          charger type.
        </Text>
      </Box>
      <Flex justify={"center"} gap={"50px"} my="50px">
        <Box 
        bg={"#fff"} 
        borderRadius={"20px"} 
        boxShadow={"2xl"} 
        p="20px"
        transition="transform 0.5s ease"  // Smooth transition for the rotation
        _hover={{ transform: "scale(1.1)" }}  // Rotate by 90 degrees on hover    
        >
          <Image src={charger1} h={"200px"} />
          <Text fontSize={"20px"} fontWeight={"bold"} py="10px">
            Wallbox Supernova
          </Text>
          <Flex justify={"space-between"} fontSize={"17px"} color={"#ccc"} fontWeight={"medium"}>
            <Text>HPC</Text>
            <Text>60-220KW</Text>
          </Flex>
        </Box>
        <Box 
        bg={"#fff"} 
        borderRadius={"20px"} 
        boxShadow={"2xl"} 
        p="20px"
        transition="transform 0.5s ease"  // Smooth transition for the rotation
        _hover={{ transform: "scale(1.1)" }}  // Rotate by 90 degrees on hover    
        >
          <Image src={charger2} h={"200px"} />
          <Text fontSize={"20px"} fontWeight={"bold"} py="10px">
            Wallbox Supernova
          </Text>
          <Flex justify={"space-between"} fontSize={"17px"} color={"#ccc"} fontWeight={"medium"}>
            <Text>HPC</Text>
            <Text>60-220KW</Text>
          </Flex>
        </Box>
        <Box 
        bg={"#fff"} 
        borderRadius={"20px"} 
        boxShadow={"2xl"} 
        p="20px"
        transition="transform 0.5s ease"  // Smooth transition for the rotation
        _hover={{ transform: "scale(1.1)" }}  // Rotate by 90 degrees on hover    
        >
          <Image src={charger3} h={"200px"} />
          <Text fontSize={"20px"} fontWeight={"bold"} py="10px">
            Wallbox Supernova
          </Text>
          <Flex justify={"space-between"} fontSize={"17px"} color={"#ccc"} fontWeight={"medium"}>
            <Text>HPC</Text>
            <Text>60-220KW</Text>
          </Flex>
        </Box>
        <Box 
        bg={"#fff"} 
        borderRadius={"20px"} 
        boxShadow={"2xl"} 
        p="20px"
        transition="transform 0.5s ease"  // Smooth transition for the rotation
        _hover={{ transform: "scale(1.1)" }}  // Rotate by 90 degrees on hover    
        >
          <Image src={charger4} h={"200px"} />
          <Text fontSize={"20px"} fontWeight={"bold"} py="10px">
            Wallbox Supernova
          </Text>
          <Flex justify={"space-between"} fontSize={"17px"} color={"#ccc"} fontWeight={"medium"}>
            <Text>HPC</Text>
            <Text>60-220KW</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Recommendation;
