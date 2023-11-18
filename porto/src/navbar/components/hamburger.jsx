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
import { useNavigate } from "react-router-dom";

export default function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
    onClose();
  };
  const toMyProject = () => {
    navigate("/AllProject");
    onClose();
  };
  const toHomes = () => {
    navigate("/");
    onClose();
  };
  return (
    <>
      <Box className="hamburger">
        <IconButton
          mt={"10px"}
          mr={"10px"}
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          bgColor={"#D8C5B2"}
          ref={btnRef}
        ></IconButton>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#D8C5B2"} h={"100px"}>
          <DrawerCloseButton />
          <DrawerBody>
            <Flex mt={"20px"} justifyContent={"center"}>
              <Box>
                <Button
                  onClick={() => toHomes()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="black"
                  color={"black"}
                >
                  Home
                </Button>
                <Button
                  onClick={() => toAbout()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="white"
                  color={"black"}
                >
                  About
                </Button>
              </Box>
              <Box>
                <Button
                  onClick={() => toMyProject()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="white"
                  color={"black"}
                >
                  Project
                </Button>
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
