import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import b1 from "../../../assets/b1.svg"
import b2 from "../../../assets/b2.svg"
import b3 from "../../../assets/b3.svg"
import b4 from "../../../assets/b4.svg"

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
          Support your community & attract the best kind of customers
        </Text>
        <Text fontWeight={"medium"} fontSize={"20px"}>
          EV drivers spend time and money where they charge. Install public EV
          chargers to attract customers or visitors to your location.
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
              <Box maxW={"300px"} color={"#000"}>
                <Image src={b1} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Attract customers
                </Text>
                <Text>
                EV drivers choose sites with EV chargers over sites without every time.
                </Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={b2} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Keep them longer
                </Text>
                <Text>
                Consumers stay longer and spend more while their car charges.
                </Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={b3} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Attract tenants
                </Text>
                <Text>Companies are more likely to lease office space in buildings with EV chargers.</Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={b4} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Build your brand
                </Text>
                <Text>Establish your business, government, or institution as a sustainability leader.</Text>
                {/* <CustomButton btnText={"Learn more"} color={"blue.300"} bg={"none"} px={"0px"}/> */}
              </Box>
      </Grid>
      <Box>
        
      </Box>
    </Box>
  );
};

export default Benefit;
