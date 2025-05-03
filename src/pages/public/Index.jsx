import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Benefit from './components/Benefit'
import Form from './components/Form'
import Recommendation from './components/Recommendation'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
      <Helmet>
              <title>Public | Vine Mobility</title>
              <meta
                name="description"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet>
      <Hero />
      <Benefit />
      <Recommendation />
      <Form />
    </Box>
  )
}

export default Index
