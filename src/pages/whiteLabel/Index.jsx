import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './components/Hero'
import UseCase from './components/UseCase'
import Branded from './components/Branded'
import GetStarted from './components/GetStarted'

const Index = () => {
  return (
    <Box>
        <Hero />
        <UseCase />
        <Branded />
        <GetStarted />
    </Box>
  )
}

export default Index