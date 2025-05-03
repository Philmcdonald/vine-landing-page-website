import { Box } from '@chakra-ui/react'
import Hero from './component/Hero'
import GetChargeLab from './component/GetChargeLab'
import Industry from './component/Industry'
import Form from './component/Form'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
       <Helmet>
                    <title>Pricing | Vine Mobility</title>
                    <meta
                      name="description"
                      content="Vine Mobility is transforming urban transport with smart solutions."
                    />
                  </Helmet>
      <Hero />
      <GetChargeLab />
      <Industry />
      <Form />
    </Box>
  )
}

export default Index
