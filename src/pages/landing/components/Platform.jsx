import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import graphic2 from "../../../assets/graphic2.svg";
import desktop from "../../../assets/desktop.svg"
import motor from "../../../assets/motor.svg"
import yatch from "../../../assets/yatch.svg"
import tablet from "../../../assets/tablet.svg"

const Platform = () => {
  return (
    <Flex
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#2a4352"}
      justifyContent={"center"}
    >
      <Box py={"50px"}>
        <Text fontSize={"23px"} color={"green.300"}>
          ChargeLab Platform
        </Text>
        <Flex align={"center"} gap={"50px"}>
          <Box>
            <Text
              fontSize={"45px"}
              maxW={"600px"}
              fontWeight={"bold"}
              color={"#fff"}
            >
              A software-first approach to EV charging
            </Text>
            <Text maxW={"500px"} color={"#fff"} fontSize={"18px"} py="20px" fontWeight={500}>
              Through software, we bring the industry's most flexible EV
              infrastructure solutions. Manage any OCPP charger, charge any
              electric car, and accept every major payment method.
            </Text>
          </Box>

          <Box>
            <Image src={graphic2} />
          </Box>
        </Flex>

        <Flex mt="80px" gap={"30px"}>
            <Box maxW={"300px"} color={"#fff"}>
                <Image src={desktop}  h={"50px"} />
                <Text py="10px" fontSize={"20px"} fontWeight={"bold"}>Full Stack Solution</Text>
                <Text>
                We help solutions providers, network operators, and fleets pick the right hardware and maintain large-scale EV charging operations.
                </Text>
            </Box>
            <Box maxW={"300px"}  color={"#fff"}>
                <Image src={motor} h={"50px"} />
                <Text py="10px" fontSize={"20px"} fontWeight={"bold"} >Open & interoperable</Text>
                <Text>
                ChargeLab has verified 30+ OCPP chargers from over a dozen manufacturers. We're compatible with any OCPP hardware.
                </Text>
            </Box>
            <Box maxW={"300px"}  color={"#fff"}>
                <Image src={tablet}  h={"50px"} />
                <Text  py="10px" fontSize={"20px"} fontWeight={"bold"}>Contant Upgrades</Text>
                <Text>
                We release improvements every year to help you stay ahead of the rapidly evolving EV industry. Cloud-based means zero downtime.
                </Text>
            </Box>
            <Box maxW={"300px"}  color={"#fff"}>
                <Image src={yatch}  h={"50px"}/>
                <Text  py="10px" fontSize={"20px"} fontWeight={"bold"}>Future-proofed</Text>
                <Text>
                ChargeLab's cutting-edge microservices architecture makes our CSMS the most scalable solution on the market.
                </Text>
            </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Platform;
