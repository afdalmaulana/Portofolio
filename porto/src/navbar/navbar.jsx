import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Spacer,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import Education from "./components/Education";
import Title from "./components/title";
import AboutMe from "./components/buttonAboutMe";
import MyProject from "./components/myProject";
import Hamburger from "./components/hamburger";
import ButtonExpe from "./components/buttonExperience";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const toAbout = () => {
    navigate("/about");
  };
  const toMyProject = () => {
    navigate("/AllProject");
  };
  const toHomes = () => {
    navigate("/");
  };
  const [isAboutActive, setIsAboutActive] = useState(false);
  const [isHomeActive, setIsHomeActive] = useState(false);
  const [isProjectActive, setIsProjectActive] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsAboutActive(location.pathname === "/about");
    setIsHomeActive(location.pathname === "/");
    setIsProjectActive(location.pathname === "/AllProject");
  }, [location.pathname]);

  // const navbar = document.getElementById("navvbar");
  // window.onscroll = () => {
  //   if (window.scrollY > 300) {
  //     navbar.classList.add("nav-active");
  //   } else {
  //     navbar.classList.remove("nav-active");
  //   }
  // };
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Box
        // bgColor={"#073b4c"}
        bgColor={"#292E33"}
        w={"100%"}
        h={{ base: "60px" }}
        id={"navvbar"}
        position={"fixed"}
        top={0}
        zIndex={10}
        // className={"nav-active"}
      >
        <Flex>
          <Title />
          <Spacer />
          <ButtonGroup>
            {isLargerThanMD ? (
              <Flex
                className="dekstop"
                justify={"space-between"}
                fontFamily={"montserrat"}
                px={"100px"}
              >
                <Button
                  onClick={() => toHomes()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="white"
                  borderBottom={isHomeActive ? "2px" : "none"}
                  borderColor={isHomeActive ? "white" : "transparent"}
                >
                  Home
                </Button>
                <Button
                  onClick={() => toAbout()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="white"
                  borderBottom={isAboutActive ? "2px" : "none"}
                  borderColor={isAboutActive ? "white" : "transparent"}
                >
                  About
                </Button>
                <Button
                  onClick={() => toMyProject()}
                  mt={"10px"}
                  // mr={"10px"}
                  colorScheme="white"
                  borderBottom={isProjectActive ? "2px" : "none"}
                  borderColor={isProjectActive ? "white" : "transparent"}
                >
                  Project
                </Button>
                {/* <AboutMe /> */}
                {/* <Education /> */}
                {/* <MyProject /> */}
                {/* <ButtonExpe /> */}
              </Flex>
            ) : (
              <Box className="mobile">
                <Hamburger />
              </Box>
            )}
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
