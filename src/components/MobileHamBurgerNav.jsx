import { Box, Flex, Text, Collapse, Icon } from '@chakra-ui/react'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa' // Ensure proper imports

function MobileHamBugerNav({ ...props }) {
  const [show, setShow] = useState(false)
  const [openSection, setOpenSection] = useState('')

  // Handle toggle of the section
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section)
  }

  return (
    <Box {...props}>
      <GiHamburgerMenu
        cursor={'pointer'}
        onClick={() => setShow((prev) => !prev)}
        fontSize={'2em'}
        color="black"
      />
      {show && (
        <Box
          position="fixed"
          bottom={'0'}
          right="0"
          top="0"
          w="90%"
          bg={`linear-gradient(to bottom right, #FFF3B0, #D9D9D9)`}
          zIndex={1022}
          padding="20px"
        >
          <Flex
            flexDir={'column'}
            justifyContent="flex-start"
            alignItems={'flex-start'}
            color={'black'}
            fontWeight="600"
            w="100%"
          >
            <FaTimes
              style={{ alignSelf: 'flex-end' }}
              fontSize="1.5em"
              cursor={'pointer'}
              onClick={() => setShow(false)}
              color="black"
            />
            <Flex
              mt={'3rem'}
              gap="20px"
              flexDir={'column'}
              alignItems="flex-start"
              justifyContent="flex-start"
              fontSize={'1.2em'}
              w="100%"
            >
              {/* Product Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('product')}
                  w="100%"
                >
                  <Text
                    textTransform={'uppercase'}
                    fontSize="1em"
                    fontWeight="bold"
                  >
                    Product
                  </Text>
                  <Icon
                    as={openSection === 'product' ? FaChevronUp : FaChevronDown}
                    fontSize="1em"
                  />
                </Flex>
                <Collapse in={openSection === 'product'}>
                  <Flex direction="column" alignItems="flex-start" mt={2}>
                    <Link
                      to="/enterprise-software"
                      onClick={() => setShow(false)}
                    >
                      <Text>Enterprise Software - Vine Charge</Text>
                    </Link>
                    <Link to="/vine-volts-app" onClick={() => setShow(false)}>
                      <Text>Driver's app - VineVolts</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Use Cases Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('usecases')}
                  w="100%"
                >
                  <Text
                    textTransform={'uppercase'}
                    fontSize="1em"
                    fontWeight="bold"
                  >
                    Use Cases
                  </Text>
                  <Icon
                    as={
                      openSection === 'usecases' ? FaChevronUp : FaChevronDown
                    }
                    fontSize="1em"
                  />
                </Flex>
                <Collapse in={openSection === 'usecases'}>
                  <Flex direction="column" alignItems="flex-start" mt={2}>
                    <Link to="/public" onClick={() => setShow(false)}>
                      <Text>Public</Text>
                    </Link>
                    <Link to="/workplace" onClick={() => setShow(false)}>
                      <Text>Workplace</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Resources Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('resources')}
                  w="100%"
                >
                  <Text
                    textTransform={'uppercase'}
                    fontSize="1em"
                    fontWeight="bold"
                  >
                    Resource
                  </Text>
                  <Icon
                    as={
                      openSection === 'resources' ? FaChevronUp : FaChevronDown
                    }
                    fontSize="1em"
                  />
                </Flex>
                <Collapse in={openSection === 'resources'}>
                  <Flex direction="column" alignItems="flex-start" mt={2}>
                    <Link to="/about" onClick={() => setShow(false)}>
                      <Text>About</Text>
                    </Link>
                    <Link to="/blog" onClick={() => setShow(false)}>
                      <Text>Blog</Text>
                    </Link>
                    <Link to="/privacy" onClick={() => setShow(false)}>
                      <Text>Privace and terms</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>

              {/* Connect Section */}
              <Box pb="10px" w="100%">
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  cursor="pointer"
                  onClick={() => toggleSection('connect')}
                  w="100%"
                >
                  <Text
                    textTransform={'uppercase'}
                    fontSize="1em"
                    fontWeight="bold"
                  >
                    Connect
                  </Text>
                  <Icon
                    as={openSection === 'connect' ? FaChevronUp : FaChevronDown}
                    fontSize="1em"
                  />
                </Flex>
                <Collapse in={openSection === 'connect'}>
                  <Flex direction="column" alignItems="flex-start" mt={2}>
                    <Link to="/contact" onClick={() => setShow(false)}>
                      <Text>Contact Us</Text>
                    </Link>
                  </Flex>
                </Collapse>
              </Box>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  )
}

export default MobileHamBugerNav
