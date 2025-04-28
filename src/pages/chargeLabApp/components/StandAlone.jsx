import { Flex, Image } from '@chakra-ui/react'
import standAlone from '../../../assets/stanAlone.svg'

const StandAlone = () => {
  return (
    <Flex bg={'#000'} justifyContent={'center'} align={'center'} py="50px">
      <Image src={standAlone} h="350px" />
    </Flex>
  )
}

export default StandAlone
