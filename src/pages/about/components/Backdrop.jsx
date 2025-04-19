import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Backdrop = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bgGradient="linear(to-r, teal.500, green.500)"
      h={"500px"}
      clipPath="polygon(0 50%, 100% 0, 100% 100%, 0 100%)"
      position={"relative"}
    //   bottom={300}
      zIndex={0}
    >

        <Flex justify={"center"} gap={"50px"} ml={"500px"} mt="100px">
            <Box color={"#fff"}>
                <Text fontSize={"30px"} fontWeight={"semibold"}>Want to react us directly?</Text>
                <Text py="20px" fontWeight={"medium"} fontSize={"20px"}>Call or email ChargeLab today:</Text>
            </Box>
        </Flex>
    </Box>
  );
};

export default Backdrop;
