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
          Let's Get You Started
        </Text>
        <Text maxW={"700px"} fontWeight={"medium"} fontSize={"18px"} py={"30px"}>
          Thinking of starting an EV charging business or already have chargers
          and not sure how to make money from them? With Vine Mobility, getting
          set up is simple. From powerful software to hands-on support, we’ll
          help you launch, manage, and monetize your chargers with ease.
        </Text>
        <Box mt="30px">
          <CustomButton
            btnText={"Talk to us"}
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
