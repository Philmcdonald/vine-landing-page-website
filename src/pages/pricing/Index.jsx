import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './component/Hero'
import GetChargeLab from './component/GetChargeLab'
import Industry from './component/Industry'
import Form from './component/Form'

const Index = () => {
  return (
    <Box>
        <Hero />
        <GetChargeLab />
        <Industry />
        <Form />
    </Box>
  )
}

export default Index