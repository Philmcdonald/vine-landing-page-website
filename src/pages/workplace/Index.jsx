import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './components/Hero'
import Benefit from './components/Benefit'
import Recommendation from './components/Recommendation'
import Form from './components/Form'
import ChargeImg from './components/ChargeImg'

const WorkPlace = () => {
  return (
    <Box >
        <Hero />
        <Benefit />
        <Recommendation />
        <Form />
        <ChargeImg />

    </Box>
  )
}

export default WorkPlace