import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import c1 from "../../../assets/c1.svg";
import c2 from "../../../assets/c2.svg";
import c3 from "../../../assets/c3.svg";
import c4 from "../../../assets/c4.svg";
import c5 from "../../../assets/c5.svg";
import c6 from "../../../assets/c6.svg";
import c7 from "../../../assets/c7.svg";
import c8 from "../../../assets/c8.svg";
import c9 from "../../../assets/c9.svg";
import c10 from "../../../assets/c10.svg";

const Features = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Box maxW={"700px"} mt="30px">
        <Text color={"blue.300"} fontWeight={"bold"} fontSize={"25px"}>
          Features
        </Text>
        <Text fontSize={"50px"} fontWeight={"bold"} py="20px">
          Love your EV charging experience
        </Text>
        <Text fontSize={"18px"} fontWeight={"medium"}>
          ChargeLab's app is built by EV drivers, for EV drivers.
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={"300px"} color={"#000"}>
          <Image src={c1} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Pay after you charge
          </Text>
          <Text>
            No "wallet". No monthly membership. Pay for what you use, after you
            use it.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={c2} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Simple, private account
          </Text>
          <Text>
            We don't need to know your date of birth and 3rd favorite color.
            We're just here to help you charge.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={c3} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Find places to charge
          </Text>
          <Text>
            Locate chargers from any ChargeLab-powered network. Third-party
            network support coming soon.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={c4} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Join a charging community
          </Text>
          <Text>
            Access private charging at your workplace or multi-family building.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={c5} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Track your usage
          </Text>
          <Text>
            Consolidated transaction history including sessions started from our
            mobile app, web app, or using an RFID card.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={c6} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Link your RFID card
          </Text>
          <Text>
            Connect all of your authentication methods in one place, including
            any ChargeLab-powered network card.
          </Text>
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={c7} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Set notifications
          </Text>
          <Text>
            Get SMS & email notifications after every charge, plus automated
            receipts.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={c8} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Get help, 24/7
          </Text>
          <Text>
            Access a human customer service agent through our toll-free number.
          </Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Features;
