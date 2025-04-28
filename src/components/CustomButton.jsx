// import { Button } from "@chakra-ui/button"
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

// import React from "react"

export const CustomButton = ({
  rightIcon,
  leftIcon,
  py,
  px,
  bg,
  color,
  hover,
  onClick,
  borderRadius,
  border,
  mr,
  w,
  btnText,
  fontSize,
  my,
  mt,
  type,
  ...props
}) => {
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (type === 'submit') {
      return navigate('/')
    } else {
      return navigate('/contact')
    }
  }
  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon || <IoIosArrowForward />}
      fontSize={fontSize || '1.2rem'}
      fontFamily={'Inter, sans-serif'}
      py={py || '1.5rem'}
      px={px || '20px'}
      bg={bg || '#000'}
      color={color || '#fff'}
      _hover={{ hover }}
      onClick={onClickHandler}
      borderRadius={borderRadius || '50px'}
      border={border}
      mt={mt || { lg: '10px' }}
      mr={mr}
      my={my}
      w={w}
      outline={'none'}
      {...props}
    >
      {btnText}
    </Button>
  )
}
