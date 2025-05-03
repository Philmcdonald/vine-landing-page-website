import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './components/Hero'
import UseCase from './components/UseCase'
import Branded from './components/Branded'
import GetStarted from './components/GetStarted'
import { Helmet } from 'react-helmet-async'

const Index = () => {
  return (
    <Box>
       <Helmet>
                    <title>White Label | Vine Mobility</title>
                    <meta
                      name="White Label"
                      content="Vine Mobility is transforming urban transport with smart solutions."
                    />
                  </Helmet>
      <Hero />
      <UseCase />
      <Branded />
      <GetStarted />
    </Box>
  )
}

export default Index
