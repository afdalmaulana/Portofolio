import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import { Fade, Slide } from "react-awesome-reveal";
import MyProject from "../../navbar/components/myProject";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

export default function MyEducation() {
  return (
    <>
      <Box bgColor={"#292e33"} id="education" h={"1200px"}>
        {/* "#292e33" */}
        <Stack ml={"100px"}>
          <Flex justifyContent={"space-between"}>
            <Fade direction="down" cascade={true} triggerOnce={true}>
              <Box>
                <Text color={"#8e7f6e"} fontSize={"24px"} mt={"80px"}>
                  Education
                </Text>
                <Stack>
                  <Text mt={"40px"} fontSize={"32px"} color={"white"}>
                    SMK Negeri 05 Makassar
                  </Text>
                  <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                    2013 - 2017 Informatics Engineering
                  </Text>
                  <Text mt={"40px"} fontSize={"32px"} color={"white"}>
                    Universitas Muslim Indonesia
                  </Text>
                  <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                    2017 - 2023 Informatics Engineering
                  </Text>
                </Stack>
              </Box>
              <Box mr={"200px"}>
                <Text color={"#8e7f6e"} fontSize={"24px"} mt={"80px"}>
                  Bootcamp
                </Text>
                <Text fontSize={"32px"} mt={"40px"} color={"white"}>
                  Purwadhika Digital Technology School
                </Text>
                <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                  May, 2023 - August 2023
                </Text>
                <Stack fontSize={"16px"} color={"white"} mt={"20px"}>
                  <Text>
                    Modul 01 - Programming Fundamental & Data Structure and
                    Algorithm
                  </Text>
                  <Text>Modul 02 - Front End Development</Text>
                  <Text>Modul 03 - BackEnd Development</Text>
                  <Text>
                    Modul 04 - Real Project Application & Project Management
                  </Text>
                  <Text>Final Project Bootcamp</Text>
                </Stack>
              </Box>
            </Fade>
          </Flex>
        </Stack>
        <Stack>
          <Text
            ml={"100px"}
            color={"#8e7f6e"}
            fontSize={{ sm: "24px", md: "48px", lg: "64px" }}
            mt={"400px"}
          >
            My Project
          </Text>
          <Flex ml={"60px"} wrap={"wrap"}>
            <Project />
            <Project3 />
            <Project4 />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
