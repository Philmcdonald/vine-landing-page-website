import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { CustomButton } from "../../../components/CustomButton";
import c9 from "../../../assets/c9.svg";
import c10 from "../../../assets/c10.svg";

const Build = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      h={"fit-content"}
    >
        <Flex align={"center"} gap={"50px"} my="50px"> 
            <Box flex={1.5}>
              <Text fontSize={"50px"} fontWeight={"bold"}>Want to build your own EV charging app?</Text>
              <Text py="20px" fontSize={"18px"} fontWeight={"medium"} maxW={"400px"}> 
              Check out ChargeLab'scontact our team today to learn about building your own network of EV chargers
              </Text>
              <CustomButton btnText={"Contact us"} bg={"blue.300"} borderRadius={"50px"}/>
            </Box>
              

            <Box flex={1}>
                      <Image src={c9} h={"50px"} />
                      <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                       White-label apps
                      </Text>
                      <Text>
                      Add your organization's logo & colors to a white-labeled version of ChargeLab's app.
                      </Text>
                      <CustomButton btnText={"Learn more"} bg={"none"} color={"blue.300"} px={"0px"}/>
            </Box>

            <Box flex={1}>
                      <Image src={c10} h={"50px"} />
                      <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                      Roaming
                      </Text>
                      <Text>
                      We're always working to give ChargeLab users easier access to more chargers.
                      </Text>
                      <CustomButton btnText={"Contact us"} bg={"none"} color={"blue.300"} px={"0px"}/>
            </Box>
        </Flex>


    </Box>
  );
};

export default Build;
