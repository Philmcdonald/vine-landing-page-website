import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Form from "./components/Form";
import Mail from "../about/components/Mail";


const Contact = () => {
  return (
   <Box>
    <Form />
    <Mail />
   </Box>
  );
};

export default Contact;
