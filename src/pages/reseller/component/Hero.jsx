import { Box, Center, Text } from "@chakra-ui/react";
import React from "react";
import Navigation from "../../../components/Nav";
import sample from "../../../assets/sample.mp4";
import logoW from "../../../assets/logoW.png";
import { CustomButton } from "../../../components/CustomButton";
import CustomModal from "../../../components/CustomModal";
import ResellerModal from "./ResellerModal";

const Hero = () => {
  return (
    <Box>
      <Box
        position="relative"
        height="100vh"
        overflow="hidden"
        p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      >
        <Box
          as="video"
          src={sample}
          autoPlay
          muted
          loop
          playsInline
          objectFit="cover"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="-1"
        />
        <Navigation
          logo={logoW}
          iconColor={"#fff"}
          color={"#fff"}
          loginColor={"#fff"}
          loginTextColor={"#fff"}
        />
        <Center
          height="100%"
          color="white"
          flexDir={"column"}
          zIndex="1"
          position="relative"
          textAlign="center"
        >
          <Text fontSize={"35px"} fontWeight={"semi-bold"}>
            ChargeLab CSMS
          </Text>
          <Text
            fontSize={"50px"}
            fontWeight={"bold"}
            maxW={"700px"}
            my="20px"
            margin={"0px auto"}
          >
            The best EV charger software for every use case
          </Text>
          <Text
            fontSize={"18px"}
            pb="30px"
            fontWeight={"medium"}
            maxW={"500px"}
            my="20px"
            margin={"0px auto"}
          >
            From multi-family homes and workplaces to fleets and public
            networks, our SaaS platform does it all.
          </Text>

          <CustomModal
           header={"Become a Reseller"}
           size={"2xl"}
            icon={
              <CustomButton
                btnText={"Become a reseller"}
                bg={"teal"}
                borderRadius={"50px"}
                color={"#fff"}
              />
            }
          >
            <ResellerModal />
          </CustomModal>
        </Center>
      </Box>
    </Box>
  );
};

export default Hero;
