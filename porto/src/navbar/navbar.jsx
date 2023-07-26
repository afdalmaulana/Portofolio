import { Box, ButtonGroup, Flex, Spacer, Stack } from "@chakra-ui/react";
import Education from "./components/Education";
import Title from "./components/title";
import AboutMe from "./components/buttonAboutMe";
import MyProject from "./components/myProject";
import Hamburger from "./components/hamburger";
import ButtonExpe from "./components/buttonExperience";

export default function Navbar() {
  return (
    <>
      <Box
        // bgColor={"grey"}
        bgColor={"#2C3333"}
        w={"100%"}
        h={{ base: "60px" }}
        // h={"200px"}
        shadow={"lg"}
        position={"fixed"}
        top={0}
        zIndex={10}
      >
        <Flex>
          <Title />
          <Spacer />
          <ButtonGroup>
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
            <Box className="mobile">
              <Hamburger />
            </Box>
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
