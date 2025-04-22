import { Box } from '@chakra-ui/react'
// import { Tabs, TabList, Tab } from '@chakra-ui/react'
import CustomText from '../../../components/CustomText'
import { SubHeading, InfoHeading, Wrapper } from '../../../components'

const HowItWorks = () => {
  return (
    <Box
      // bg={"#eee"}
      justifyContent={'center'}
      // h={"100vh"}
    >
      <Wrapper>
        <Box maxW={'600px'}>
          <InfoHeading>How it works</InfoHeading>
          <SubHeading>Connect Any OCPP-Compliant Charger</SubHeading>
          <CustomText py="20px">
            The VineCharge platform is built to work seamlessly with all
            OCPP-compatible chargers. Our system is flexible, future-proof, and
            hardware-neutral.
            <br /> Select an EV charger manufacturer below to see how VineCharge
            platform works.
          </CustomText>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default HowItWorks

// <Flex justify={'center'} my="40px">
// <Tabs variant="soft-rounded" colorScheme="green">
{
  /* <TabList>
    <Tab>ABB</Tab>
    <Tab>Delta</Tab>
    <Tab>EVBox</Tab>
    <Tab>Lite-On</Tab>
    <Tab>Phihong</Tab>
    <Tab>Mix & Match</Tab>
  </TabList> */
}
{
  /* <TabPanels>
  <TabPanel>
    <p>one!</p>
  </TabPanel>
  <TabPanel>
    <p>two!</p>
  </TabPanel>
</TabPanels> */
}
// </Tabs>
// </Flex>
