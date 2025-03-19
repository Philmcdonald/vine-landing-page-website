import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UserInterface from "./components/UserInterface";
import Integration from "./components/Integration";
import Developers from "./components/Developers";
import GetStarted from "./components/GetStarted";


const EnterpriseSofware = () => {
  return (
    <Box>
      <Hero />
      <HowItWorks />
      <Features  />
      <UserInterface />
      <Integration />
      <Developers />
      <GetStarted />
    </Box>
  );
};

export default EnterpriseSofware;
