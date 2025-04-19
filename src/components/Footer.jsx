import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logoB from '../assets/logoB.png'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'

const Footer = () => {
  return (
    <Box
      p={['20px 30px', '20px 30px', '20px 30px', '20px 150px']}
      bg="#fff"
      h={'fit-content'}
    >
      <Grid
        my="50px"
        justifyContent={{ base: 'space-between', xl: 'space-between' }}
        gap={{ base: '30px', xl: '20px' }}
        templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
      >
        <Box>
          <Image src={logoB} h={'40px'} />
          <Flex my="30px" align={'center'} gap={'20px'}>
            <FaFacebook size={25} />
            <BsTwitter size={25} />
            <LiaLinkedin size={25} />
            <BsInstagram size={25} />
          </Flex>
          <Text>© VineLab Inc.</Text>
        </Box>

        <Box>
          <Box>
            <Text fontWeight={'bold'} pb="10px">
              Products
            </Text>
            <Text>Enterprise Software</Text>
            <Text py="10px">White-labeling</Text>
            <Text>Charge-lab app</Text>
            <Text py={'10px'}>Charge supply</Text>
          </Box>
          <Box mt="20px">
            <Text fontWeight={'bold'} pb="10px">
              Products Details
            </Text>
            <Text>Partners</Text>
            <Text py="10px">Integration</Text>
          </Box>
        </Box>

        <Box>
          <Box>
            <Text fontWeight={'bold'} pb="10px">
              Use Cases
            </Text>
            <Text>Public</Text>
            <Text py="10px">Workplace</Text>
          </Box>
          <Box mt="20px">
            <Text fontWeight={'bold'} pb="10px">
              Incentives & rebates
            </Text>
            <Text>U.S. rebabtes</Text>
            <Text py="10px">Canadian rebabtes</Text>
          </Box>
        </Box>

        <Box>
          <Box>
            <Text fontWeight={'bold'} pb="10px">
              Industry advocacy
            </Text>
            <Text>OCCP</Text>
            <Text py="10px">OCPI</Text>
          </Box>
          <Box mt="20px">
            <Text fontWeight={'bold'} pb="10px">
              Company
            </Text>
            <Text>About</Text>
            <Text py="10px">Contact</Text>
            <Text py="10px">Blog</Text>
            <Text py="10px">Jobs</Text>
            <Text py="10px">Security trust center</Text>
            <Text py="10px">Privacy & terms</Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Footer
