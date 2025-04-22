import { Box } from '@chakra-ui/react'
import Hero from './component/Hero'
import EvCharge from './component/EvCharge'
import Ecosystem from './component/Ecosystem'
import Partners from './component/Partners'
import ChargeLab from './component/ChargeLab'

const Reseller = () => {
  return (
    <Box>
        <Hero />
        <EvCharge />
        <Ecosystem />
        <Partners />
        <ChargeLab />
    </Box>
  )
}

export default Reseller