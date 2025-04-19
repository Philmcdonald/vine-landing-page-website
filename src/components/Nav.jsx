import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"
import MobileHamBugerNav from "./MobileHamBurgerNav";
import { CustomButton } from "./CustomButton";
import NavigationOptions from "./NavigationOptions";
import { IoLockClosedOutline } from "react-icons/io5";
import { col } from "framer-motion/client";
import logoB from "../assets/logoB.png"

const  Navigation =({bg, color, iconColor,loginColor, loginTextColor, logo})=> {
  return (
    <Flex
      alignItems={"center"}
      fontFamily={"Inter, sans-serif"}
      justifyContent="space-between"
      fontWeight="500"
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      bg={bg}
      gap={["20px", "20px", "20px", "unset"]}
      // p="20px 150px"
      // p={["20px 30px", "20px 30px", "20px 30px", "20px 150px"]}
      // h="70px"
    >
      <Link to={"/"}>
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" src={logo || logoB} alt="logo" h={"40px"} />
        </Flex>
      </Link>

      <MobileHamBugerNav display={["block", "block", "block", "none"]} />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["20px", "50px"]}
          color={color}
        >
          <NavigationOptions title="PRODUCTS" color={color} iconColor={iconColor} />

          <NavigationOptions title="USE CASES" color={color} iconColor={iconColor} />

          <NavigationOptions title="RESOURCES" color={color} iconColor={iconColor} />
          <NavigationOptions title="CONNECT" color={color} iconColor={iconColor} />

          <Link to={"/blog"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>BLOG</Text>
          </Link>
          <Link to={"/pricing"}>
            <Text color={color} fontSize={"13px"} fontWeight={"bold"}>STORE</Text>
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap="50px"
        >
          <CustomButton
            color={loginTextColor}
            btnText={"Login"}
            px="35px"
            bg={"none"}
            leftIcon={<IoLockClosedOutline color={loginColor} />}
          />
        </Flex>
      </>
    </Flex>
  );
}

export default Navigation;
