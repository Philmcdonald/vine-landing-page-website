import { Box, Flex, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";

const HowItWorks = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      // bg={"#eee"}
      justifyContent={"center"}
      // h={"100vh"}
    >
      <Box mt={"200px"} maxW={"600px"}>
        <Text fontSize={"25px"} fontWeight={"bold"} color={"blue.300"}>
          How it works
        </Text>
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Connect any OCPP-compliant charger
        </Text>
        <Text fontSize={"18px"} fontWeight={"medium"} py="20px">
          The VineCharge platform is built to work seamlessly with all
          OCPP-compatible chargers. Our system is flexible, future-proof, and
          hardware-neutral.<br/> Select an EV charger manufacturer below to see how
          VineCharge platform works.
        </Text>
      </Box>
      {/* <Flex justify={"center"} my="40px">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab>ABB</Tab>
            <Tab>Delta</Tab>
            <Tab>EVBox</Tab>
            <Tab>Lite-On</Tab>
            <Tab>Phihong</Tab>
            <Tab>Mix & Match</Tab>
          </TabList>
        </Tabs>
      </Flex> */}
    </Box>
  );
};

export default HowItWorks;
