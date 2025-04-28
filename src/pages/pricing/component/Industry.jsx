import { Box, Flex, Image } from '@chakra-ui/react'
import r3 from '../../../assets/r3.svg'
import r4 from '../../../assets/r4.svg'
import r5 from '../../../assets/r5.svg'
import r6 from '../../../assets/r6.svg'
import { SubHeading, Wrapper } from '../../../components'

const Industry = () => {
  return (
    <Box bg={'#f7f7f7'} h={'fit-content'}>
      <Wrapper>
        <Box>
          <SubHeading textAlign={{ base: 'center' }}>
            Join These Industry Leaders
          </SubHeading>
          <Flex
            justifyContent={'center'}
            gap={{ base: '40px', xl: '70px' }}
            align={'center'}
            mt="30px"
            flexDirection={{ base: 'column', xl: 'row' }}
          >
            <Image src={r3} h={{ base: '25px', xl: '30px' }} />
            <Image src={r4} h={{ base: '25px', xl: '30px' }} />
            <Image src={r5} h={{ base: '25px', xl: '30px' }} />
            <Image src={r6} h={{ base: '25px', xl: '30px' }} />
          </Flex>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Industry
