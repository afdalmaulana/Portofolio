import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Fade } from "react-awesome-reveal";
import Project5 from "./Project5";
import Project4 from "./Project4";
import { useNavigate } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import Project6 from "./Project6";

export default function AllProject() {
  const navigate = useNavigate();
  const toProject = () => {
    navigate("/pageProject");
  };
  return (
    <>
      <Box bgColor={"#FFFBF5"}>
        <Stack px={65} align={"center"}>
          <Box>
            <Text
              color={"black"}
              fontSize={{ sm: "24px", md: "48px", lg: "64px" }}
              mt={"50px"}
              fontFamily={"bitter"}
              id="project"
            >
              My Project
            </Text>
            {/* <HeroBanner /> */}
            <Flex mt={"20px"} wrap={"wrap"} gap={3}>
              <Project />
              <Project2 />
              <Project5 />
              <Project4 />
              <Project3 />
              <Project6 />
            </Flex>
            <Box color={"black"} position="relative" padding="10">
              <Divider />
              <AbsoluteCenter bgColor={"#FFFBF5"} px="4">
                <Button
                  bgColor={"#FFFBF5"}
                  variant={""}
                  onClick={() => toProject()}
                >
                  View All Project
                </Button>
              </AbsoluteCenter>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
