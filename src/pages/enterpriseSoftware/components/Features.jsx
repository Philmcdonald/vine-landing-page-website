import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import React from "react";
import f1 from "../../../assets/f1.svg"
import f2 from "../../../assets/f2.svg"
import f3 from "../../../assets/f3.svg"
import f4 from "../../../assets/f4.svg"
import f5 from "../../../assets/f5.svg"
import f6 from "../../../assets/f6.svg"
import f7 from "../../../assets/f7.svg"
import f8 from "../../../assets/f8.svg"
import f9 from "../../../assets/f9.svg"
import f10 from "../../../assets/f10.svg"
import f11 from "../../../assets/f11.svg"
import f12 from "../../../assets/f12.svg"
import f13 from "../../../assets/f13.svg"
import f14 from "../../../assets/f14.svg"
import f15 from "../../../assets/f15.svg"
import f16 from "../../../assets/f16.svg"

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
          Everything you want in a CSMS, and more
        </Text>
        <Text fontSize={"18px"} fontWeight={"medium"} py="20px">
          ChargeLab's software is packed with features for every use case. We
          set the standard for innovation in the EV charger management industry.
        </Text>

       
      </Box>
      <Grid templateColumns='repeat(4, 1fr)' gap={10} my="50px">
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f1} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Fast & easy deployment
            </Text>
            <Text>
            Register & connect chargers in minutes with self-serve tooling. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f2} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            API access
            </Text>
            <Text>
            Pull real-time & historic charging data and integrate apps via API. 
            </Text>
          </Box>

          <Box maxW={"300px"} color={"#000"}>
            <Image src={f3} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Dashboard
            </Text>
            <Text>
            Visualize EV charging data in a customizable admin dashboard. 
            </Text>
          </Box>

          <Box maxW={"300px"} color={"#000"}>
            <Image src={f4} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            24/7 end-user support
            </Text>
            <Text>
            Support EV drivers & site hosts through phone & live chat. 
            </Text>
          </Box>

          <Box maxW={"300px"} color={"#000"}>
            <Image src={f5} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Monitoring
            </Text>
            <Text>
            Get automatic monitoring for charger faults & network errors. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f6} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Site administration
            </Text>
            <Text>
            Manage sites & admins across companies & locations. 
            </Text>
          </Box>

          <Box maxW={"300px"} color={"#000"}>
            <Image src={f7} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Charger diagnostics
            </Text>
            <Text>
            Analyze OCPP message logs & update configurations. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f8} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Reports
            </Text>
            <Text>
            Generate reports & export data for utility rebate programs. 
            </Text>
          </Box>
          


          <Box maxW={"300px"} color={"#000"}>
            <Image src={f9} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Notifications
            </Text>
            <Text>
            Create admin notifications for faults or downtime. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f10} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Firmware updates
            </Text>
            <Text>
            Ensure seamless operations with remote firmware updates. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f11} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Security
            </Text>
            <Text>
            Get peace of mind with SOC 2 Type II security compliance. 
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f12} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Access control
            </Text>
            <Text>
            Control access for residents, employees, or fleets.  
            </Text>
          </Box>


          <Box maxW={"300px"} color={"#000"}>
            <Image src={f13} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Revenue collection
            </Text>
            <Text>
            Accept any major credit card. Secure & PCI compliant.  
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
            <Image src={f14} h={"50px"} />
            <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Detailed pricing control
            </Text>
            <Text>
            Bill by time or kWh. Customize pricing schemes & discounts.  
            </Text>
          </Box>
          <Box maxW={"300px"} color={"#000"}>
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
          </Box>
        </Grid>
    </Box>
  );
};

export default Features;
