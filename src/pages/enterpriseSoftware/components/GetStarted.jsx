import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from "../../../components/CustomButton";

const GetStarted = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      justifyContent={"center"}
      bg={"#fff"}
      // h={"100vh"}
    >
      <Box my="50px">
        <Text fontSize={"35px"} fontWeight={"bold"}>
          Let's get started
        </Text>
        <Text maxW={"400px"} fontWeight={"medium"} fontSize={"18px"}>
          EV charging doesn't have to be complicated. ChargeLab is your
          end-to-end EV infrastructure solution.
        </Text>
        <Box mt="30px">
          <CustomButton
            btnText={"Contact us"}
            bg={"green.300"}
            borderRadius={"50px"}
            color={"#fff"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetStarted;
