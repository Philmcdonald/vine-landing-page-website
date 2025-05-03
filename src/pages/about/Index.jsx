import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Backdrop from './components/Backdrop'
import { Helmet } from 'react-helmet-async'
// import Mail from './components/Mail'

const Index = () => {
  return (
    <Box>
      <Helmet>
              <title>About | Vine Mobility</title>
              <meta
                name="About Vine Mobility"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet>
      <Hero />
      <Mission />
      <Backdrop />
      {/* <Mail /> */}
    </Box>
  )
}

export default Index
