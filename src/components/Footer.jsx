import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import logoB from '../assets/logoB.png'
import { FaFacebook } from 'react-icons/fa'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { LiaLinkedin } from 'react-icons/lia'
import Wrapper from './Wrapper'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Box bg="#fff" h={'fit-content'}>
      <Wrapper>
        <Grid
          my="20px"
          justifyContent={{ base: 'space-between', xl: 'space-between' }}
          gap={{ base: '30px', xl: '20px' }}
          templateColumns={{ base: '1fr', xl: 'repeat(3, 1fr)' }}
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
              <Flex flexDir={'column'} gap={2}>
                <Link to={'/enterprise-software'}>
                  <Text>Enterprise Software - VineCharge</Text>
                </Link>
                <Link to={'/vine-volts-app'}>
                  <Text>Driver&apos;s App - Vine Volts</Text>
                </Link>
              </Flex>
            </Box>

            <Box marginTop={5}>
              <Text fontWeight={'bold'} pb="10px">
                Use Cases
              </Text>
              <Flex flexDir={'column'} gap={2}>
                <Link to={'/public'}>
                  <Text>Public</Text>
                </Link>
                <Link to={'/workplace'}>
                  <Text>Workplace</Text>
                </Link>
              </Flex>
            </Box>
          </Box>

          <Box>
            <Box>
              <Text fontWeight={'bold'} pb="10px">
                Company
              </Text>

              <Flex flexDir={'column'} gap={2}>
                <Link to={'/about'}>
                  <Text>About</Text>
                </Link>

                <Link to={'/contact'}>
                  <Text>Contact</Text>
                </Link>

                <Text>Blog</Text>

                <Link to={'/privacy'}>
                  <Text>Privacy & terms</Text>
                </Link>
              </Flex>
            </Box>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Footer
