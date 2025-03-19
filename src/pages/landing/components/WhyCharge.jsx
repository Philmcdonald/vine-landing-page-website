import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import chargeCard from "../../../assets/chargeCard.svg"
import chargeMobile from "../../../assets/chargeMobile.webp"
import chargeDashboard from "../../../assets/chargeDashboard.webp"

const WhyCharge = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}>
      <Box pt="50px">
        <Text fontSize={"23px"} color={"blue.300"}>
          Why ChargeLab
        </Text>
        <Text fontSize={"45px"} maxW={"600px"} fontWeight={"bold"}>
          Your full-stack solution for smart EV charging
        </Text>
        <Flex justify={"space-between"} align={"center"} my="40px" gap={"50px"}>
          <Box>
            <Text fontSize={"18px"} fontWeight={500}>
              We give fleets, charging networks, and EV charging solutions
              providers all the tools they need to build smart EV infrastructure
              businesses. ChargeLab is the best platform to connect and control
              EV chargers at scale.
            </Text>
          </Box>
          <Box>
            <Text fontSize={"18px"} fontWeight={500}> 
              We give fleets, charging networks, and EV charging solutions
              providers all the tools they need to build smart EV infrastructure
              businesses. ChargeLab is the best platform to connect and control
              EV chargers at scale.
            </Text>
          </Box>
        </Flex>
        <Flex >
            <Box>
               <Box><Image src={chargeCard} /></Box> 
                <Box mt="-70px"><Image src={chargeMobile} ml={"50px"} h={"700px"} /></Box>
            </Box>
            <Box>
                <Image src={chargeDashboard} h={"700px"} w={"full"}/>
            </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WhyCharge;
