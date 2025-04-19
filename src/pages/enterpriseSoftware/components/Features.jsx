import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import f1 from "../../../assets/f1.svg";
import f2 from "../../../assets/f2.svg";
import f3 from "../../../assets/f3.svg";
import f4 from "../../../assets/f4.svg";
import f5 from "../../../assets/f5.svg";
import f6 from "../../../assets/f6.svg";
import f7 from "../../../assets/f7.svg";
import f8 from "../../../assets/f8.svg";
import f9 from "../../../assets/f9.svg";
import f10 from "../../../assets/f10.svg";
import f11 from "../../../assets/f11.svg";
import f12 from "../../../assets/f12.svg";
import f13 from "../../../assets/f13.svg";
import f14 from "../../../assets/f14.svg";
import f15 from "../../../assets/f15.svg";
import f16 from "../../../assets/f16.svg";

const Features = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      // h={"100vh"}
    >
      <Box mt={"70px"} maxW={"600px"}>
        <Text fontSize={"25px"} fontWeight={"bold"} color={"blue.300"}>
          Features
        </Text>
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Everything you need in a CSMS, and more
        </Text>
        <Text fontSize={"18px"} fontWeight={"medium"} py="20px">
          VineCharge is more than just software. It’s your all-in-one control
          center for managing EV chargers, tracking performance, and powering a
          seamless charging experience across multiple locations.
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f1} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Fast & Easy Deployment
          </Text>
          <Text>
            Connect and activate your EV chargers fast. Our user-friendly tools
            make it easy to get started.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f2} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            API Integration
          </Text>
          <Text>
            Need to build or connect your own systems? VineCharge gives you
            access to real-time and historical charging data via API.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f3} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Powerful Dashboard
          </Text>
          <Text>
            Track your chargers, view energy usage, and manage activity with a
            clean, customizable dashboard.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f4} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            24/7 Support
          </Text>
          <Text>
            Your drivers and site managers can get help anytime through live
            chat, phone, or email.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f5} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Smart Monitoring
          </Text>
          <Text>
            We’ll alert you automatically if something’s wrong like charger
            faults, downtime, or network issues
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f6} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Multi-site Management
          </Text>
          <Text>
            Manage several charging sites and admins from one central dashboard,
            perfect for businesses with multiple branches or locations.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f7} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Charger Diagnostics
          </Text>
          <Text>
            Dive into OCPP message logs, troubleshoot remotely, and fine-tune
            configurations anytime.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f8} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Reports
          </Text>
          <Text>
            Export energy usage and performance data to support audits,
            sustainability reports, or rebate applications.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f9} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Notifications
          </Text>
          <Text>
            Set notifications for charger errors, offline status, or custom
            triggers to stay on top of things.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f10} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Firmware Updates
          </Text>
          <Text>
            Keep your chargers running smoothly with remote firmware updates and
            configuration control.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f11} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Security
          </Text>
          <Text>
            VineCharge is built with enterprise-level security in mind.{" "}
          </Text>
        </Box>
        {/* <Box maxW={"300px"} color={"#000"}>
          <Image src={f12} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Access control
          </Text>
          <Text>Control access for residents, employees, or fleets.</Text>
        </Box> */}

        <Box maxW={"300px"} color={"#000"}>
          <Image src={f13} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Revenue Collection
          </Text>
          <Text>
            Accept multiple payments method through Paystack payment gateway,
            fully compliant, reliable, and built for the Nigerian market.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f14} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Flexible Pricing 
          </Text>
          <Text>
          Set your own rates, per hour or kWh. Add promos or discounts for loyalty programs or festive periods.
          </Text>
        </Box>
        {/* <Box maxW={"300px"} color={"#000"}>
          <Image src={f15} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Power management
          </Text>
          <Text>
            Maximize energy capacity with load balancing in the dashboard.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={f16} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Vehicle management
          </Text>
          <Text>
            Optimize fleet charging, track usage, & assign vehicles RFIDs.
          </Text>
        </Box> */}
      </Grid>
    </Box>
  );
};

export default Features;
