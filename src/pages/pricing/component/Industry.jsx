import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import r3 from "../../../assets/r3.svg"
import r4 from "../../../assets/r4.svg"
import r5 from "../../../assets/r5.svg"
import r6 from "../../../assets/r6.svg"

const Industry = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      h={"fit-content"}
    >
      <Box my="50px">
        <Text fontSize={"30px"} fontWeight={"bold"}>
          Join these industry leaders
        </Text>
        <Flex justifyContent={"center"} gap={"70px"} align={"center"} mt="30px">
            <Image src={r3} h={"30px"}/>
            <Image src={r4}  h={"50px"}/>
            <Image src={r5}  h={"30px"}/>
            <Image src={r6}  h={"30px"}/>
        </Flex>
      </Box>
    </Box>
  );
};

export default Industry;
