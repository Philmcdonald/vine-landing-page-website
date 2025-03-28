import { Box, Grid, Image, Text } from "@chakra-ui/react";
import React from "react";
import car from "../../../assets/car.svg"
import software from "../../../assets/software.svg"
import installer from "../../../assets/installer.svg"
import building from "../../../assets/building.svg"

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
        <Text fontSize={"18px"}  maxW={"900px"}>
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
                ChargeLab makes EV charging simple. We've got your back at home, at work, and on the go.
                </Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={building} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Building managers
                </Text>
                <Text>
                Smart EV chargers for every building. The most advanced and affordable solutions.
                </Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={installer} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Installers & partners
                </Text>
                <Text>Partner with ChargeLab for more flexible EV charging solutions and custom installer tools.</Text>
              </Box>
              <Box maxW={"300px"} color={"#000"}>
                <Image src={software} h={"50px"} />
                <Text py="10px" fontSize={"18px"} fontWeight={"bold"}>
                Software developers
                </Text>
                <Text>The world's first programmable EV charging platform. Add EV to your smart grid app today.</Text>
                {/* <CustomButton btnText={"Learn more"} color={"blue.300"} bg={"none"} px={"0px"}/> */}
              </Box>
      </Grid>
    </Box>
  );
};

export default Mission;
