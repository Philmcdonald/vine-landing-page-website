import Hero from './components/Hero'
import { Box } from '@chakra-ui/react'
import Form from './components/Form'
import Banner from './components/Banner'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
       <Helmet>
                    <title>Integration | Vine Mobility</title>
                    <meta
                      name="Integration "
                      content="Vine Mobility is transforming urban transport with smart solutions."
                    />
                  </Helmet>
      <Hero />
      <Form />
      <Banner />
    </Box>
  )
}

export default Index
