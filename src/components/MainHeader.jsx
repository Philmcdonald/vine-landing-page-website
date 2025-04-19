import { Text } from '@chakra-ui/react'

const MainHeading = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '30px', lg: '40px', xl: '58px' }}
      lineHeight={{ base: '3rem', lg: '4rem', xl: '5.5rem' }}
      fontWeight={{ base: '600', xl: '700' }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default MainHeading
