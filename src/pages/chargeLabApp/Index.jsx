import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Features from './components/Features'
// import Build from './components/Build'
import StandAlone from './components/StandAlone'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
      <Helmet>
              <title>Driver App | Vine Mobility</title>
              <meta
                name="description"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet>
      <Hero />
      <Features />
      {/* <Build /> */}
      <StandAlone />
    </Box>
  )
}

export default Index
