import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import car from "../../../assets/car.svg";
import software from "../../../assets/software.svg";
import installer from "../../../assets/installer.svg";
import building from "../../../assets/building.svg";
import { CustomButton } from "../../../components/CustomButton";
import FormInput from "../../../components/FormInput";

const Mission = () => {
  return (
    <Box
      p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      bg={"#fff"}
      justifyContent={"center"}
      h={"fit-content"}
    >
      <Box>
        <Text fontSize={"40px"} fontWeight={"bold"}>
          Our mission
        </Text>
        <Text fontSize={"18px"} my="30px" maxW={"900px"}>
          In the next 20 years, EVs will replace ICE vehicles as the main way
          that people move around. We are living through a revolution in not
          only how we move, but how we store and use energy. 25% of all end-use
          global energy is spent on transportation (37% in North America).
          Switching from gas to electric fuel for transportation will require
          the largest global infrastructure overhaul of our lives—from new
          renewable power generation, to how we transmit, distribute, store, and
          use electricity.
        </Text>
        <Text fontSize={"18px"} maxW={"900px"}>
          ChargeLab’s mission is to build EV charging solutions that scale. This
          means making EV charger deployment fast and affordable. And making
          charging easy and reliable for every EV driver.
        </Text>
        <Text fontSize={"18px"} my="30px" maxW={"900px"}>
          ChargeLab sits at the nexus point between vehicles, building owners,
          and the grid. With software, we can help buildings, communities, and
          entire cities charge more EVs than their infrastructure would
          otherwise allow. We can optimize charging for grid capacity, cost, or
          carbon impact. And we can enable bi-directional communication between
          individual EVs and the grid.
        </Text>
        <Text fontSize={"18px"} maxW={"900px"}>
          ChargeLab is building for scale because our planet needs millions more
          EVs, and consumers want millions more EVs. Automobiles have been
          powered by petrol since 1892. The switch to electric vehicles is a
          once-per-century economic and cultural shift. We are pioneers for the
          new era of transportation and energy.
        </Text>
      </Box>
      <Grid templateColumns="repeat(4, 1fr)" gap={10} my="50px">
        <Box maxW={"300px"} color={"#000"}>
          <Image src={car} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            EV drivers
          </Text>
          <Text>
            ChargeLab makes EV charging simple. We've got your back at home, at
            work, and on the go.
          </Text>
          <CustomButton
            btnText={"Download our app"}
            px={"0px"}
            bg={"none"}
            color={"teal"}
          />
        </Box>

        <Box maxW={"300px"} color={"#000"}>
          <Image src={building} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Building managers
          </Text>
          <Text>
            Smart EV chargers for every building. The most advanced and
            affordable solutions.
          </Text>
          <CustomButton
            btnText={"Learn more"}
            px={"0px"}
            bg={"none"}
            color={"teal"}
          />
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={installer} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Installers & partners
          </Text>
          <Text>
            Partner with ChargeLab for more flexible EV charging solutions and
            custom installer tools.
          </Text>
          <CustomButton
            btnText={"Become a partner"}
            px={"0px"}
            bg={"none"}
            color={"teal"}
          />
        </Box>
        <Box maxW={"300px"} color={"#000"}>
          <Image src={software} h={"50px"} />
          <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
            Software developers
          </Text>
          <Text>
            The world's first programmable EV charging platform. Add EV to your
            smart grid app today.
          </Text>
          <CustomButton
            btnText={"Start building"}
            px={"0px"}
            bg={"none"}
            color={"teal"}
          />
          {/* <CustomButton btnText={"Learn more"} color={"blue.300"} bg={"none"} px={"0px"}/> */}
        </Box>
      </Grid>
      <Flex mt="100px" gap={"50px"}>
        <Box bg={"#fff"} p={"30px"} borderRadius={"10px"} boxShadow={"xl"} flex={1} zIndex={1}>
          <Flex align={"center"} gap={"10px"}>
            <FormInput label={"FIRST NAME"} />
            <FormInput label={"LAST NAME"} />
          </Flex>
          <Flex my={"20px"}>
            <FormInput label={"BUSINESS EMAIL "} />
          </Flex>
          <Flex align={"center"} gap={"10px"}>
            <FormInput label={"PHONE NUMBER"} />
            <FormInput label={"COMPANY NAME"} />
          </Flex>
          <Flex my={"20px"}>
            <FormInput label={"HOW CAN WE HELP YOU?"} lines={5} />
          </Flex>
          <Flex my={"30px"}>
            <CustomButton
              btnText={"submit"}
              color={"#fff"}
              bg={"blue.300"}
              w={"full"}
            />
          </Flex>
        </Box>
        <Box flex={1}>
          <Text fontWeight={"bold"} fontSize={"45px"}>
            Contact our team
          </Text>
          <Text my="20px" fontWeight={"medium"} fontSize={"20px"}>
            Fill out the form for media enquiries, partnership opportunities, or
            if you are looking for a white-label solution.
          </Text>
          <Text fontSize={"20px"} fontWeight={"medium"}>
          If you are an EV driver, use our <span style={{color:"teal", cursor:"pointer",}} >feedback form.</span> 
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mission;
