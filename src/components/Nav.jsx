import { Box, Flex, Img, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import MobileHamBugerNav from './MobileHamBurgerNav'
import { CustomButton } from './CustomButton'
import NavigationOptions from './NavigationOptions'
import { IoLockClosedOutline } from 'react-icons/io5'
import logoB from '../assets/logoB.png'
import { CustomContainer } from './Container'
import Wrapper from './Wrapper'

const Navigation = ({
  bg,
  color,
  iconColor,
  loginColor,
  loginTextColor,
  logo,
}) => {
  return (
    <Box
      fontFamily={'Inter, sans-serif'}
      fontWeight="500"
      fontSize={['.9em', '1.1em']}
      bg={bg}
      dropShadow={'dark-lg'}
    >
      <Wrapper
        py={{
          base: '10px',
          xl: '15px',
        }}
      >
        <Box
          flexDir={'row'}
          alignItems={'center'}
          display={'flex'}
          justifyContent={{ base: 'space-between', lg: 'flex-start' }}
        >
          <Link to={'/'}>
            <Flex gap={'2'} alignItems={'center'}>
              <Img
                loading="lazy"
                src={logo || logoB}
                alt="logo"
                h={{ base: '45px', lg: '50px' }}
              />
            </Flex>
          </Link>

          <MobileHamBugerNav display={['block', 'block', 'block', 'none']} />

          <>
            <Flex
              marginLeft={{ lg: '12rem' }}
              display={['none', 'none', 'none', 'flex']}
              alignItems={'center'}
              gap={['20px', '50px']}
              color={color}
            >
              <NavigationOptions
                title="PRODUCTS"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="USE CASES"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="RESOURCES"
                color={color}
                iconColor={iconColor}
              />
              <NavigationOptions
                title="CONNECT"
                color={color}
                iconColor={iconColor}
              />
            </Flex>
          </>
        </Box>
      </Wrapper>
    </Box>
  )
}

export default Navigation
