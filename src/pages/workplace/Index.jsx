import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Benefit from './components/Benefit'
import Recommendation from './components/Recommendation'
import Form from './components/Form'
import ChargeImg from './components/ChargeImg'
import { Helmet } from 'react-helmet-async'

const WorkPlace = () => {
  return (
    <Box>
      <Helmet>
              <title>Work Space | Vine Mobility</title>
              <meta
                name="Work Space"
                content="Vine Mobility is transforming urban transport with smart solutions."
              />
            </Helmet>
      <Hero />
      <Benefit />
      <Recommendation />
      <Form />
      <ChargeImg />
    </Box>
  )
}

export default WorkPlace
