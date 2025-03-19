import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Build from './components/Build'
import StandAlone from './components/StandAlone'

const Index = () => {
  return (
    <Box>
        <Hero />
        <Features />
        <Build />
        <StandAlone />
    </Box>
  )
}

export default Index