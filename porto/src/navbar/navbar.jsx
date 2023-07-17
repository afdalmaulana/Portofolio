import { Box, ButtonGroup, Flex, Spacer, Stack } from "@chakra-ui/react";
import Education from "./components/Education";
import Title from "./components/title";
import AboutMe from "./components/buttonAboutMe";
import MyProject from "./components/myProject";

export default function Navbar() {
  return (
    <>
      <Box
        bgColor={"white"}
        width={"100%"}
        h={"65px"}
        shadow={"lg"}
        position={"fixed"}
        top={0}
        zIndex={10}
      >
        <Flex>
          <Title />
          <Spacer />
          <ButtonGroup>
            <AboutMe />
            <Education />
            <MyProject />
          </ButtonGroup>
        </Flex>
      </Box>
    </>
  );
}
