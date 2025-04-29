import { Box, Flex, Grid, Image } from '@chakra-ui/react'

import brand1 from '../../../assets/abb-logo.svg'
import brand2 from '../../../assets/RAB-logo.svg'
import brand3 from '../../../assets/colliers-logo.svg'
import brand4 from '../../../assets/bentallgreenoak-logo.svg'
import brand5 from '../../../assets/espen-logo.svg'
import brand6 from '../../../assets/eaton-logo.svg'
import brand7 from '../../../assets/Polara-Logo.svg'
import brand8 from '../../../assets/Wallbox-logo.svg'

import { Wrapper } from '../../../components'

const Sponsor = () => {
  return (
    <Wrapper
      py={{
        base: '45px',
        xl: '80px',
      }}
      mt={{ base: '', xl: '-50px' }}
    >
      <Grid
        gridTemplateColumns={{ xl: 'repeat(4, 1fr)' }}
        align={'center'}
        gap={{ base: '40px', xl: '50px' }}
        justify={'center'}
      >
        <Box>
          <Image src={brand1} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand2} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand3} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand4} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand5} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand6} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand7} h={{ base: '20px', xl: '30px' }} />
        </Box>
        <Box>
          <Image src={brand8} h={{ base: '20px', xl: '30px' }} />
        </Box>
      </Grid>
    </Wrapper>
  )
}

export default Sponsor
