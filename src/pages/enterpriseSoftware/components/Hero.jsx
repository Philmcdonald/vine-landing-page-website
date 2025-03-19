import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navigation from '../../../components/Nav'
import { CustomButton } from '../../../components/CustomButton'
import enterprise1 from "../../../assets/enterprise1.webp"
import enterprise2 from "../../../assets/enterprise2.webp"
import logoB from "../../../assets/logoB.png"
import logoW from "../../../assets/logoW.png"

const Hero = () => {
  return (
    <Box
    p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
    bg={"#eee"}
    justifyContent={"center"}
    h={"100vh"}
  >
    <Navigation color={"#000"} logo={logoB}/>
    <Flex mt={"50px"} align={"center"} position={"relative"}  >
        <Box maxW={"600px"}>
         <Text fontSize={"60px"} fontWeight={"bold"}>Foundational software for EV chargers</Text>
         <Text fontSize={"18px"} pt="10px" maxW={"500px"}>ChargeLab is the only true operating system for EV chargers. Our CSMS transforms any OCPP device into a smart charger.</Text>
        <Box mt="30px">
          <CustomButton btnText={"Contact Us"} />  
        </Box>
         
        </Box>

        <Box h="400px" >
            <Box>
              <Image src={enterprise1}  h="500px" w="auto"/>  
            </Box>
            <Box position={"absolute"} top={360} right={100}>
              <Image src={enterprise2} h={"500px"}   w="auto"/>  
            </Box>
            
        </Box>

    </Flex>

  </Box>
  )
}

export default Hero