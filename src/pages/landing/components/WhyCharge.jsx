import { Box, Flex, Text, Image } from "@chakra-ui/react";
import React from "react";
import chargeCard from "../../../assets/chargeCard.svg";
import chargeMobile from "../../../assets/chargeMobile.webp";
import chargeDashboard from "../../../assets/chargeDashboard.webp";

const WhyCharge = () => {
  return (
    <Box p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}>
      <Box pt="50px">
        <Text fontSize={"23px"} color={"blue.300"}>
          Why Vine Mobility ?
        </Text>
        <Text fontSize={"45px"} maxW={"700px"} fontWeight={"bold"}>
          Your comprehensive solution for smart EV charging
        </Text>
        <Flex justify={"space-between"} align={"start"} my="40px" gap={"50px"}>
          <Box>
            <Text fontSize={"18px"} fontWeight={400}>
              We deliver complete ecosystem of tools designed for fleet
              managers, charging network operators, EV infrastructure
              developers, Energy companies, oil and gas companies, malls,
              recreational centers and so on. Our <span style={{fontWeight:"bolder"}}>Enterprise Software </span>provides
              everything needed to deploy, manage, and scale intelligent
              charging solutions.
            </Text>
            <Text fontSize={"18px"} fontWeight={400} py="20px">
              With our robust management system, you can seamlessly integrate
              and control your entire charging network, regardless of size or
              complexity. Vine Mobility offers the most reliable framework for
              expanding your EV charging operations.
            </Text>
          </Box>
          <Box>
            <Text fontSize={"18px"} fontWeight={400}>
              We're equally passionate about creating exceptional experiences
              for drivers through our Driver App. Our user-centric design
              ensures that charging is not just efficient but also intuitive and
              enjoyable for everyone.
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Box>
            <Box>
              <Image src={chargeCard} />
            </Box>
            <Box mt="-70px">
              <Image src={chargeMobile} ml={"50px"} h={"700px"} />
            </Box>
          </Box>
          <Box>
            <Image src={chargeDashboard} h={"700px"} w={"full"} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WhyCharge;
