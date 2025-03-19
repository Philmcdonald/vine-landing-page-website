import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import b1 from "../../../assets/b1.svg";
import b2 from "../../../assets/b2.svg";
import b3 from "../../../assets/b3.svg";
import b4 from "../../../assets/b4.svg";

const Benefit = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Box maxW={"600px"} mt={"70px"}>
        <Text color="blue.300" fontWeight={"bold"} fontSize={"25px"}>
          Key benefits
        </Text>
        <Text fontSize={"30px"} fontWeight={"bold"} py="20px">
          Help power the future
        </Text>
        <Text fontWeight={"medium"} fontSize={"20px"}>
          Depending on your location, workplace charging is quickly turning from
          a perk to an expectation. In either case, installing EV chargers at
          your office building is a convenient way to attract tenants, retain
          employees, meet sustainability goals, and more.
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={"300px"} color={"#000"}>
          <Image src={b1} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          A home for garage orphans
          </Text>
          <Text>
          EV drivers who can't charge at home depend on workplace charging to stay topped up.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={b2} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          Retain employees
          </Text>
          <Text>
          Build loyalty and corporate culture by offering EV charging as a perk.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={b3} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          Attract tenants
          </Text>
          <Text>
          Companies are more likely to lease office space in buildings with EV chargers.
          </Text>
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={b4} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
          Achieve sustainability goals
          </Text>
          <Text>
          Earn LEED points and other green building certifications. Comply with any local EV regulation.
          </Text>
          {/* <CustomButton btnText={"Learn more"} color={"blue.300"} bg={"none"} px={"0px"}/> */}
        </Box>
      </Grid>
      <Box></Box>
    </Box>
  );
};

export default Benefit;
