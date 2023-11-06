import {
  Box,
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

export default function Navbar() {
  const navbar = document.getElementById("navvbar");
  window.onscroll = () => {
    if (window.scrollY > 300) {
      navbar.classList.add("nav-active");
    } else {
      navbar.classList.remove("nav-active");
    }
  };
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  return (
    <>
      <Box
        bgColor={"#073b4c"}
        // bgColor={"#222831"}
        w={"100%"}
        h={{ base: "60px" }}
        id={"navvbar"}
        position={"fixed"}
        top={0}
        zIndex={10}
        className={"nav-active"}
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
              >
                <AboutMe />
                <Education />
                <MyProject />
                <ButtonExpe />
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
