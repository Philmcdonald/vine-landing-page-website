// import { Button } from "@chakra-ui/button"
import { Button } from "@chakra-ui/react";
import { useNavigate }from "react-router-dom"
import { IoIosArrowForward } from "react-icons/io";
// import React from "react"

export const CustomButton = ({rightIcon,leftIcon,py,px,bg,color,hover,onClick,borderRadius,border,mr,w,btnText,fontSize,my}) => {
   const navigate = useNavigate()
  return (
    <Button
      leftIcon={leftIcon}
      rightIcon={rightIcon || <IoIosArrowForward />}
      fontSize={fontSize || "1rem"}
      fontFamily={"Inter, sans-serif"}
      py={py}
      px={px}
      bg={bg}
      color={color}
      _hover={{ hover }}
      // onClick={()=>{
      //  navigate("/pre-login")
      // }}
      borderRadius={borderRadius}
      border={border}
      mr={mr}
      my={my}
      w={w}
      outline={"none"}
    >
      {btnText}
    </Button>
  );
}
