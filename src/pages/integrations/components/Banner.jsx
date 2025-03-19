import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import intImg from "../../../assets/intImg.svg"

const Banner = () => {
  return (
    <Flex bg={"#fff"} p={"50px"} justify={"center"}>
        <Image src={intImg} h={"350px"} />
    </Flex>
  )
}

export default Banner