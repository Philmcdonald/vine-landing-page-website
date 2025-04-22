import { Box, Grid, Image, Text } from '@chakra-ui/react'
import ladder from '../../../assets/ladder.svg'
import { Wrapper } from '../../../components'

const Mail = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <Text textAlign={'center'} fontSize={'30px'} fontWeight={'bold'}>
          Mailing address
        </Text>
        <Grid
          gridTemplateColumns={{ base: '1fr', xl: '30% 30%' }}
          placeContent={'center'}
          justify={'center'}
          gap={'50px'}
          my="50px"
        >
          <Box
            borderRadius={'20px'}
            bg={'#fff'}
            boxShadow={'md'}
            p={'20px'}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image src={ladder} h={'50px'} />
            <Text fontSize={'20px'} fontWeight={'bold'}>
              United States
            </Text>
            <Text>1049 El Monte Ave, Suite C #592</Text>
            <Text>Mountain View, CA 94040</Text>
          </Box>
          <Box
            borderRadius={'20px'}
            bg={'#fff'}
            boxShadow={'md'}
            p={'20px'}
            display={'flex'}
            flexDir={'column'}
            alignItems={'center'}
          >
            <Image src={ladder} h={'50px'} />
            <Text fontSize={'20px'} fontWeight={'bold'}>
              Canada
            </Text>
            <Text>122 Judge Rd</Text>
            <Text>Etobicoke, ON M8Z 5B7</Text>
          </Box>
        </Grid>
      </Wrapper>
    </Box>
  )
}

export default Mail
