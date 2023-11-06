import { Box, Flex, Text } from "@chakra-ui/react";
import Project3 from "./Project3";
import Project from "./Project";
import Project2 from "./Project2";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";

export default function PageProject() {
  return (
    <>
      <Box fontFamily={"montserrat"} mt={"60px"}>
        <Box px={"20px"}>
          <Text fontSize={{ sm: "24px", md: "48px", lg: "64px" }}>
            All Project
          </Text>
          <Flex gap={5} wrap={"wrap"}>
            <Project />
            <Project2 />
            <Project3 />
            <Project4 />
            <Project5 />
            <Project6 />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
