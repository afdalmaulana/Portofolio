import { Box, Flex, Spacer, Stack } from "@chakra-ui/react";
import Education from "./components/Education";
import Title from "./components/title";
import AboutMe from "./components/buttonAboutMe";
import MyProject from "./components/myProject";

export default function Navbar() {
  return (
    <>
      <Box bgColor={"white"} width={"100%"} h={"65px"} shadow={'lg'}>
        <Flex>
        <Title />
        <Spacer />
        <AboutMe/>
        <MyProject/>
        <Education />
        </Flex>
      </Box>
    </>
  );
}
