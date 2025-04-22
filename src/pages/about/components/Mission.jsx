import { Box } from '@chakra-ui/react'
import { CustomText, SubHeading, Wrapper } from '../../../components'

const Mission = () => {
  return (
    <Box bg={'#fff'} justifyContent={'center'} h={'fit-content'}>
      <Wrapper>
        <SubHeading>Our mission</SubHeading>
        <CustomText my="30px" maxW={'900px'}>
          In the next 20 years, EVs will replace ICE vehicles as the main way
          that people move around. We are living through a revolution in not
          only how we move, but how we store and use energy. 25% of all end-use
          global energy is spent on transportation (37% in North America).
          Switching from gas to electric fuel for transportation will require
          the largest global infrastructure overhaul of our lives—from new
          renewable power generation, to how we transmit, distribute, store, and
          use electricity.
        </CustomText>
        <CustomText maxW={'900px'}>
          ChargeLab’s mission is to build EV charging solutions that scale. This
          means making EV charger deployment fast and affordable. And making
          charging easy and reliable for every EV driver.
        </CustomText>
        <CustomText my="30px" maxW={'900px'}>
          ChargeLab sits at the nexus point between vehicles, building owners,
          and the grid. With software, we can help buildings, communities, and
          entire cities charge more EVs than their infrastructure would
          otherwise allow. We can optimize charging for grid capacity, cost, or
          carbon impact. And we can enable bi-directional communication between
          individual EVs and the grid.
        </CustomText>
        <CustomText fontSize={'18px'} maxW={'900px'}>
          ChargeLab is building for scale because our planet needs millions more
          EVs, and consumers want millions more EVs. Automobiles have been
          powered by petrol since 1892. The switch to electric vehicles is a
          once-per-century economic and cultural shift. We are pioneers for the
          new era of transportation and energy.
        </CustomText>
      </Wrapper>
    </Box>
  )
}

export default Mission
