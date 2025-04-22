import { Box, Flex, Grid, Image, Text } from '@chakra-ui/react'
import r1 from '../../../assets/r1.svg'
import r2 from '../../../assets/r2.svg'
import { SubHeading, Wrapper } from '../../../components'

const GetChargeLab = () => {
  return (
    <Box
      // bgGradient="linear(to-r, teal.500, green.500)"
      h={'fit-content'}
    >
      <Wrapper>
        <Box>
          <SubHeading fontSize={'30px'} fontWeight={'bold'}>
            Get ChargeLab pricing
          </SubHeading>
          <Grid
            gridTemplateColumns={{ base: '1fr', xl: '1fr 1fr' }}
            mt="50px"
            gap={{ base: '50px', xl: '100px' }}
            textAlign={'left'}
          >
            <Flex gap={'20px'}>
              <Image src={r1} h={'50px'} />
              <Box>
                <Text fontSize={'25px'} fontWeight={'semibold'} pb="10px">
                  Find a reseller
                </Text>
                <Text fontWeight={'medium'}>
                  Our turnkey partners resell VineCharge&apos;s network services
                  along with a selection of hardware and turnkey installation
                  services. Find a reseller{' '}
                  <span style={{ color: 'blue' }}>here</span> . To become a
                  ChargeLab reseller,{' '}
                  <span style={{ color: 'blue' }}>contact us</span>.
                </Text>
              </Box>
            </Flex>

            <Flex gap={'20px'}>
              <Image src={r2} h="50px" />
              <Box>
                <Text fontSize={'25px'} fontWeight={'semibold'} pb="10px">
                  Enterprise Lincense
                </Text>
                <Text fontWeight={'medium'}>
                  If your organization plans to install hundreds EV chargers in
                  the next 12 months, our Enterprise License is for you. Pick
                  and choose which services you need, starting with our
                  industry-leading CSMS.
                </Text>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default GetChargeLab
