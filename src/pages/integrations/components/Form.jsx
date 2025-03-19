import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import FormInput from "../../../components/FormInput"
import { CustomButton } from "../../../components/CustomButton";
import form1 from "../../../assets/form1.svg"
import form2 from "../../../assets/form2.svg"
import form3 from "../../../assets/form3.svg"
import form4 from "../../../assets/form4.svg"

const Form = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#eee"}
      justifyContent={"center"}
      h={"fit-content"}
    >
    <Flex my="40px" justify={"space-between"}>
        <Box bg={"#fff"} p={"30px"} borderRadius={"10px"}>
            <Flex align={"center"} gap={"10px"}>
              <FormInput label={"FIRST NAME"}/>  
              <FormInput label={"LAST NAME"}/>
            </Flex>
            <Flex my={"20px"}>
                <FormInput label={"BUSINESS EMAIL "}/>
            </Flex>
            <Flex align={"center"} gap={"10px"}>
              <FormInput label={"PHONE NUMBER"}/>  
              <FormInput label={"COMPANY NAME"}/>
            </Flex>
            <Flex my={"20px"}>
                <FormInput label={"HOW CAN WE HELP YOU?"} lines={5}/>
            </Flex>
            <Flex my={"30px"}>
                <CustomButton btnText={"submit"} color={"#fff"} bg={"blue.300"} w={"full"}/>
            </Flex>

        </Box>

        <Box>
            <Text fontSize={"30px"} fontWeight={"bold"}>Integrate with ChargeLab</Text>
            <Text maxW={"400px"} fontWeight={"medium"} fontSize={"18px"}>
            Help us build better EV infrastructure, smarter buildings, and a smarter grid.
            </Text>
            <Grid templateColumns='repeat(2, 1fr)' gap={10} my="50px">
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form1} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Powerful platform
                        </Text>
                        <Text>
                        ChargeLab's CSMS has dozens of features and capabilities
                        </Text>
                      </Box>

                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form2} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        One point for any EV charger
                        </Text>
                        <Text>
                        With a single integration, ChargeLab gives you access to dozens of EV chargers
                        </Text>
                      </Box>
            
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form3} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Great distribution
                        </Text>
                        <Text>
                        Access dozens of channel partners and thousands of customers through the ChargeLab platform. 
                        </Text>
                      </Box>
            
                      <Box maxW={"300px"} color={"#000"}>
                        <Image src={form4} h={"50px"} />
                        <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                        Well-documented APIs
                        </Text>
                        <Text>
                        Access our robust, flexible, and ever-improving APIs.
                        </Text>
                      </Box>
            
                      
                    </Grid>
        </Box>

    </Flex>
    </Box>
  );
};

export default Form;
