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
      <Box className="responsive">
        <IconButton
          mt={"10px"}
          mr={"10px"}
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          ref={btnRef}
          w={{ base: "25px", md: "0px", lg: "0px" }}
        ></IconButton>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={"#292e33"} w={"10px"} ml={"20px"}>
          <DrawerCloseButton />
          <DrawerBody>
            <Link to="about" smooth={true}>
              <Box>
                <Button
                  mt={"10px"}
                  mr={"10px"}
                  colorScheme="green"
                  w={"200px"}
                  fontSize={"20px"}
                  color={"white"}
                >
                  About
                </Button>
              </Box>
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
