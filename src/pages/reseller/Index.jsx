import { Box } from '@chakra-ui/react'
import Hero from './component/Hero'
import EvCharge from './component/EvCharge'
import Ecosystem from './component/Ecosystem'
import Partners from './component/Partners'
import ChargeLab from './component/ChargeLab'
import { Helmet } from 'react-helmet-async'

const Reseller = () => {
  return (
    <Box>
       <Helmet>
                    <title>Reseller | Vine Mobility</title>
                    <meta
                      name="Resseller Option"
                      content="Vine Mobility is transforming urban transport with smart solutions."
                    />
                  </Helmet>
        <Hero />
        <EvCharge />
        <Ecosystem />
        <Partners />
        <ChargeLab />
    </Box>
  )
}

export default Reseller