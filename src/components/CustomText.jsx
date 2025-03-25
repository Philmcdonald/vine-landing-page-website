import { Text } from '@chakra-ui/react'

export const CustomText = ({ children, ...props }) => {
  return (
    <Text
      fontWeight={{ base: 'normal' }}
      lineHeight={{ base: '1.5' }}
      fontSize={{ base: '18px' }}
      {...props}
    >
      {children}
    </Text>
  )
}
