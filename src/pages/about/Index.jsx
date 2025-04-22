import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Backdrop from './components/Backdrop'
import Mail from './components/Mail'

const Index = () => {
  return (
    <Box>
      <Hero />
      <Mission />
      <Backdrop />
      <Mail />
    </Box>
  )
}

export default Index
