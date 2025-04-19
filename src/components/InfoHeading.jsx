import { Text } from '@chakra-ui/react'

const InfoHeading = ({ children, ...props }) => {
  return (
    <Text
      fontSize={{ base: '22px' }}
      fontWeight={{ base: 'bold' }}
      color={'green.300'}
      {...props}
    >
      {children}
    </Text>
  )
}

export default InfoHeading
