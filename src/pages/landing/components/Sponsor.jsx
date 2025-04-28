import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import brand1 from '../../../assets/brand1.png'
import brand2 from '../../../assets/brand2.png'
import brand3 from '../../../assets/brand3.png'
import brand4 from '../../../assets/brand4.png'
import { Wrapper } from '../../../components'

const Sponsor = () => {
  return (
    <Wrapper
      py={{
        base: '45px',
        xl: '50px',
      }}
      mt={{ base: '', xl: '-120px' }}
    >
      <Flex align={'center'} gap={'50px'} justify={'center'}>
        <Box>
          <Image src={brand1} h={'250px'} />
        </Box>
        <Box>
          <Image src={brand2} h={'250px'} />
        </Box>
        <Box>
          <Image src={brand3} h={'250px'} />
        </Box>
        <Box>
          <Image src={brand4} h={'250px'} />
        </Box>
      </Flex>
    </Wrapper>
  )
}

export default Sponsor
