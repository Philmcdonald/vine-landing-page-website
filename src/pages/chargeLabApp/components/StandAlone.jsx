import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import standAlone from "../../../assets/stanAlone.svg"

const StandAlone = () => {
  return (
    <Flex justifyContent={"center"} align={"center"} py="50px">
        <Image src={standAlone} h="350px"/>
    </Flex>
  )
}

export default StandAlone