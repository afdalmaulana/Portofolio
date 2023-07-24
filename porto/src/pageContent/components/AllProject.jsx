import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Fade } from "react-awesome-reveal";

export default function AllProject() {
  return (
    <>
      <Box bgColor={"#073b4c"} id="" h={"800px"}>
        <Stack>
          <Flex wrap={"wrap"}>
            <Fade direction="left" cascade>
              {/* <Project />
            <Project2 />
            <Project3 /> */}
            </Fade>
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
