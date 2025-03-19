import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import r1 from "../../../assets/r1.svg";
import r2 from "../../../assets/r2.svg";

const GetChargeLab = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      // bgGradient="linear(to-r, teal.500, green.500)"
      h={"fit-content"}
    >
      <Box my="50px">
        <Text fontSize={"30px"} fontWeight={"bold"}>
          {" "}
          Get ChargeLab pricing
        </Text>
        <Flex align={"center"} mt="50px" gap="100px">
          <Flex gap={"20px"}>
            <Image src={r1} h={"50px"} />
            <Box>
              <Text fontSize={"25px"} fontWeight={"semibold"} pb="10px">
                Find a reseller
              </Text>
              <Text fontWeight={"medium"}>
                Our turnkey partners resell ChargeLab's network services along
                with a selection of hardware and turnkey installation services.
                Find a reseller <span style={{color:"blue"}}>here</span> . To become a ChargeLab reseller, <span style={{color:"blue"}}>contact
                us</span>.
              </Text>
            </Box>
          </Flex>

          <Flex gap={"20px"}>
            <Image src={r2} h="50px" />
            <Box>
              <Text fontSize={"25px"} fontWeight={"semibold"} pb="10px">
                Enterprise Lincense
              </Text>
              <Text fontWeight={"medium"}>
                If your organization plans to install hundreds EV chargers in
                the next 12 months, our Enterprise License is for you. Pick and
                choose which services you need, starting with our
                industry-leading CSMS.
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default GetChargeLab;
