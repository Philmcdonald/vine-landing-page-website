import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import brand1 from "../../../assets/brand1.png"
import brand2 from "../../../assets/brand2.png"
import brand3 from "../../../assets/brand3.png"
import brand4 from "../../../assets/brand4.png"

const Sponsor = () => {
  return (
    <Flex p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]} align={"center"} gap={"50px"} justify={"center"}>
        <Box>
            <Image src={brand1} h={"250px"} />
        </Box>
        <Box>
            <Image src={brand2}  h={"250px"}/>
        </Box>
        <Box>
            <Image src={brand3}  h={"250px"}/>
        </Box>
        <Box>
            <Image src={brand4}  h={"250px"}/>
        </Box>
    </Flex>
  )
}

export default Sponsor