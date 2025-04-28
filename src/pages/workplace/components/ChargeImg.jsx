import { Flex, Image } from '@chakra-ui/react'
import Rc1 from '../../../assets/Rc1.svg'

const ChargeImg = () => {
  return (
    <Flex bg={'#000'} py="50px" justify={'center'} h={'fit-content'}>
      <Image src={Rc1} h="350px" />
    </Flex>
  )
}

export default ChargeImg
