import React from 'react'
import Hero from './components/Hero'
import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'

const TurnKey = () => {
  return (
    <Box>
       <Helmet>
                    <title>Turnkey | Vine Mobility</title>
                    <meta
                      name="description"
                      content="Vine Mobility is transforming urban transport with smart solutions."
                    />
                  </Helmet>
        <Hero />
    </Box>
  )
}

export default TurnKey