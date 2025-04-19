/* eslint-disable react/prop-types */
import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TiArrowRight } from "react-icons/ti";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
// import Web from "../../src/assets/Web.png";
// import Design from "../../src/assets/Design.png";
// import Management from "../../src/assets/Management.png";

function NavigationOptions({ title, color,iconColor }) {
  const [show, setShow] = useState(false);
  let interval = "";
  

  return (
    <Flex position="relative" zIndex={"999"}>
      <Flex
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => {
          interval = setTimeout(() => {
            setShow(false);
          }, 100);
        }}
        gap="10px"
        alignItems={"center"}
        cursor="pointer"
        
      >
        <Text color={color} fontSize={"13px"} fontWeight={"bold"}_hover={{color:"#ccc"}} >{title}</Text>
       {!show ?  <IoIosArrowDown color={iconColor} /> : <IoIosArrowUp color={iconColor}  />} 
      </Flex>

      {show && (
        <Flex
          bg="#fff"
          onMouseEnter={() => {
            clearTimeout(interval);
            console.log("in", interval);

            // setShow(true);
          }}
          onMouseLeave={() => {
            clearTimeout(interval);

            setShow(false);
          }}
          position={"absolute"}
          p={"15px"}
          // left={"-100px"}
          top="40px"
          // top={["100px", "100px", "100px", "30px"]}
          // bottom={["-220px", title === "Courses" ? "-120px" : "-120px"]}
          // alignItems={"center"}
          // w={"300px"}
          w={title.toLowerCase() === "products" ? "300px" : "300px"}
          // w="fit-content"
          // width={["500px", "unset"]}
          boxShadow={"2px 2px 4px gray"}
          borderRadius="10px"
          justifyContent={"space-between"}
          zIndex={999}
        >
          {title.toLowerCase() === "products" ? (
            // <Flex
            //   justifyContent={"space-between"}
            //   px={"10px"}
            //   // gap="5px"
              // w="300px",
            //   h={"fit-content"}
            //   // bg={"green"}
            //   borderRadius={"5px"}
            // >
            <Flex
              justifyContent={"space-between"}
              display={["none", "none", "none", "flex"]}
              // alignItems={"flex-start"}
              // gap={"100px"}
              // px="20px"
              
              w={"100%"}
            >
              <Box w={"100%"} flex={1.5} py="20px" borderRadius={"10px"}>
                <Text fontSize={"12px"} pb={"20px"} fontWeight={"bold"} color={"#ccc"}>
                  OVERVIEW
                </Text>
                <Flex  color={"#000"} flexDir={"column"} gap={"20px"}>
                    <Link to={"/enterprise-software"}>
                      <Text _hover={{color:"blue"}} transition="all 0.3s ease">Enterprise software</Text>
                    </Link>
                    {/* <Text fontSize={"12px"} fontWeight={"bold"} color={"#ccc"}>FOR SITE HOSTS</Text> */}
                    {/* <Link to={"/turnkey"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Turnkey install</Text>
                    </Link> */}
                    <Text fontSize={"12px"} fontWeight={"bold"} color={"#ccc"}>FOR EV DRIVERS</Text>
                    <Link to={"/charge-lab-app"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Driver's VineVolt app</Text>
                    </Link>
                    <Text fontSize={"12px"} fontWeight={"bold"} color={"#ccc"}>FOR PARTNERS</Text>
                    <Link to={"/integration"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Integrations</Text>
                    </Link>
                    <Link to={"/pricing"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Pricing</Text>
                    </Link>
                    <Link to={"/white-label"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">White-labeling</Text>
                    </Link>
                    {/* <Link to={"/pre-login"}>
                    <Text _hover={{color:"blue"}} transition="all 0.3s ease">ChargeLab verified hardware</Text>
                    </Link>             */}
                </Flex>
              </Box>
            </Flex>
          ) : // </Flex>
          title.toLowerCase() === "use cases" ? (
            <Box
              // flexDir={"column"}
              // gap="5px"
              display={["none", "none", "none", "block"]}
              w="100%"
              py={"20px"}
              // px="30px"
              h={"fit-content"}
              // bg={"green"}
              // borderRadius={"5px"}
            >
              <Flex  color={"#000"} flexDir={"column"} gap={"20px"}>
                    <Link to={"/public"}>
                      <Text _hover={{color:"blue"}} transition="all 0.3s ease">Public </Text>
                    </Link>
                    <Link to={"/workspace"}>
                    <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Workspace</Text>
                    </Link>
                </Flex>
            </Box>
          ) : title.toLowerCase() === "resources" ? (
            <Box
            // flexDir={"column"}
            // gap="5px"
            display={["none", "none", "none", "block"]}
            w="100%"
            py={"20px"}
            // px="30px"
            h={"fit-content"}
            // bg={"green"}
            // borderRadius={"5px"}
          >
            <Flex  color={"#000"} flexDir={"column"} gap={"20px"}>
                  <Link to={"/about"}>
                    <Text _hover={{color:"blue"}} transition="all 0.3s ease">About </Text>
                  </Link>
                  <Link to={"/contact"}>
                  <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Contact</Text>
                  </Link>
                  <Link to={"/blog"}>
                  <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Blog</Text>
                  </Link>
                  <Link to={"/privacy"}>
                  <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Privacy & terms</Text>
                  </Link>
              </Flex>
          </Box>
          ): (
            <Box
            // flexDir={"column"}
            // gap="5px"
            display={["none", "none", "none", "block"]}
            w="100%"
            py={"20px"}
            // px="30px"
            h={"fit-content"}
            // bg={"green"}
            // borderRadius={"5px"}
          >
            <Flex  color={"#000"} flexDir={"column"} gap={"20px"}>
                  <Link to={"/reseller"}>
                    <Text _hover={{color:"blue"}} transition="all 0.3s ease">Become a Reseller </Text>
                  </Link>
                  <Link to={"/contact"}>
                  <Text  _hover={{color:"blue"}} transition="all 0.3s ease">Contact us</Text>
                  </Link>
              </Flex>
          </Box>
          )}
        </Flex>
      )}
    </Flex>
  );
}

export default NavigationOptions;
