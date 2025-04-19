import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";
import evCharge from "../../../assets/evCharge.webp"

const ChargeLab = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      //    bgGradient="linear(to-r, teal.500, green.500)"
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Box>
        <Text
          fontSize={"40px"}
          maxW={"500px"}
          margin={"0px auto"}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Partnering with ChargeLab has never been easier
        </Text>
        <Flex
          justify={"center"}
          align={"center"}
          gap={"30px"}
          my="30px"
          color={"#fff"}
        >
          <Box
            bgGradient="linear(to-r, teal.500, green.500)"
            boxShadow={"md"}
            borderRadius={"10px"}
            p={"20px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text fontSize={"40px"} fontWeight={"bold"}>
              {" "}
              1{" "}
            </Text>

            <Text fontSize={"20px"} fontWeight={"bold"} py="20px">
              Apply
            </Text>
            <Text textAlign={"center"}>
              Submit an application to become a reseller.
            </Text>
          </Box>

          <Box
            bgGradient="linear(to-r, teal.500, green.500)"
            boxShadow={"md"}
            borderRadius={"10px"}
            p={"20px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text fontSize={"40px"} fontWeight={"bold"}>
              2
            </Text>
            <Text fontSize={"20px"} fontWeight={"bold"} py="20px">
              Sign
            </Text>
            <Text textAlign={"center"}>
              Sign your agreement to get access to preferencial pricing.
            </Text>
          </Box>

          <Box
            bgGradient="linear(to-r, teal.500, green.500)"
            boxShadow={"md"}
            borderRadius={"10px"}
            p={"20px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text fontSize={"40px"} fontWeight={"bold"}>
              {" "}
              3{" "}
            </Text>
            <Text fontSize={"20px"} fontWeight={"bold"} py="20px">
              Deploy
            </Text>
            <Text textAlign={"center"}>
              Receive a $500 gift card when you deploy your first two ports.
            </Text>
          </Box>

          <Box
            bgGradient="linear(to-r, teal.500, green.500)"
            boxShadow={"md"}
            borderRadius={"10px"}
            p={"20px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text fontSize={"40px"} fontWeight={"bold"}>
              4
            </Text>
            <Text fontSize={"20px"} fontWeight={"bold"} py="20px">
              Grow
            </Text>
            <Text textAlign={"center"}>
              Continue to grow by recouping up to 15% margin on every software
              sale.
            </Text>
          </Box>
        </Flex>
        <Flex justify={"center"} mt="100px" mb="30px" align={"center"}>
            <Flex bg={"blue.500"} align={"center"}>
          <Box p={"30px 20px"} bg={"blue.400"} color={"#fff"} maxW={"600px"}>
            <Text fontSize={"20px"} fontWeight={"medium"}>Limited time offer</Text>
            <Text fontSize={"40px"} fontWeight={"bold"} py="20px">Earn $1,000+ in bonuses as a ChargeLab reseller.</Text>
            <Text fontSize={"20px"} fontWeight={"medium"}>
              We cut you a check for $500 when you deploy two ports. Refer your
              friends to this program and get $500 for each one that deploys 2
              or more ports.
            </Text>
            <Box mt="20px">
                <CustomButton btnText={"Get started"} color={"#fff"} borderRadius={"50px"} border={"1px solid #fff"} bg={"none"}/>
            </Box>
          </Box>
          <Box p={"30px 20px"} bg={"blue.500"} color={"#fff"}>
           <Image src={evCharge} h={"200px"}/>
          </Box>
          </Flex>
        </Flex>
        <Text textAlign={"center"} fontWeight={"medium"}>Terms and conditions apply. <span style={{color:"teal", fontWeight:"bold"}}>See here </span>for details.</Text>
      </Box>
    </Box>
  );
};

export default ChargeLab;
