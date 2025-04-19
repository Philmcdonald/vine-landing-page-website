import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import u1 from "../../../assets/u1.svg";
import u2 from "../../../assets/u2.svg";
import u3 from "../../../assets/u3.svg";
import u4 from "../../../assets/u4.svg";
import { CustomButton } from "../../../components/CustomButton";

const UserInterface = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      // h={"100vh"}
    >
      <Box mt={"70px"} maxW={"600px"}>
        <Text fontSize={"40px"} fontWeight={"bold"}>
          End-User Experience
        </Text>
        <Text fontSize={"18px"} fontWeight={"medium"} py="20px">
          We’re big on user experience because EV charging should be simple,
          smooth, and stress-free.
        </Text>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={10} my="50px">
        <Box maxW={"300px"} color={"#000"}>
          <Image src={u1} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Branded Just for You
          </Text>
          <Text>
            Customize the interface with your brand colors and logo. Every
            charger under your name should look like it belongs.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={u2} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Mobile App Access
          </Text>
          <Text>
            Our Driver's App gives drivers everything they need, locate
            chargers, scan to start, pay, and track sessions—all from their
            phone.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={u3} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            QR Code Simplicity
          </Text>
          <Text>
            Every charger on our system comes with a unique QR code. No extra
            hardware, no hassle—just scan, plug, and charge.
          </Text>
          {/* <CustomButton
            btnText={"Get the ChargeLab app"}
            color={"blue.300"}
            bg={"none"}
            px={"0px"}
          /> */}
        </Box>
        {/* <Box maxW={"300px"} color={"#000"}>
          <Image src={u4} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            RFID cards
          </Text>
          <Text>A tried & true method for end-user authentication.</Text>
          <CustomButton
            btnText={"View network cards"}
            color={"blue.300"}
            bg={"none"}
            px={"0px"}
          />
        </Box> */}
      </Grid>
    </Box>
  );
};

export default UserInterface;
