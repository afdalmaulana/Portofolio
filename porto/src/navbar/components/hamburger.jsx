import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import "../../style/main.css";
import AboutMe from "./buttonAboutMe";
import { Link } from "react-scroll";

export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box className="hamburger">
        <IconButton
          mt={"10px"}
          mr={"10px"}
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          ref={btnRef}
          // size={"1000000px"
          // w={{ sm: "2px", md: "0px", lg: "0px" }}
        ></IconButton>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#073b4c"} h={"100px"}>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex mt={"20px"}>
              <Box>
                <Link to="about" smooth={true}>
                  <Button
                    mt={"10px"}
                    ml={"20px"}
                    mr={"10px"}
                    colorScheme="#292e33"
                    w={"100px"}
                    fontSize={"20px"}
                    color={"black"}
                    onClick={onClose}
                  >
                    About
                  </Button>
                </Link>
              </Box>
              <Link to="education" smooth={true}>
                <Box>
                  <Button
                    mt={"10px"}
                    mr={"10px"}
                    colorScheme="#292e33"
                    // colorScheme="cyan"
                    w={"110px"}
                    fontSize={"20px"}
                    color={"black"}
                    onClick={onClose}
                  >
                    Education
                  </Button>
                </Box>
              </Link>
              <Link to="project" smooth={true}>
                <Box>
                  <Button
                    mt={"10px"}
                    mr={"10px"}
                    colorScheme="#292e33"
                    // colorScheme="cyan"s
                    w={"100px"}
                    fontSize={"20px"}
                    color={"black"}
                    onClick={onClose}
                  >
                    Project
                  </Button>
                </Box>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
