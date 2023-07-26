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
      <Box
        bgColor={"#292e33"}
        id="education"
        h={{ base: "2000px", md: "1050px", lg: "1200px" }}
        maxW={"100%"}
        fontFamily={"montserrat"}
      >
        {/* "#292e33" */}
        <Stack
          ml={{ base: "30px", lg: "100px" }}
          w={{ sm: "350px", md: "800px", lg: "1240px" }}
          mr={{ base: 10, md: 100, lg: 100 }}
        >
          <Flex justifyContent={"space-between"} className="education">
            <Fade direction="down" cascade={true} triggerOnce={true}>
              <Box>
                <Text
                  color={"#E9B785"}
                  fontSize={{ base: "24px" }}
                  mt={{ base: "50px", md: "50px", lg: "80px" }}
                >
                  Education
                </Text>
                <Stack>
                  <Text
                    mt={{ base: "20px", md: "30px", lg: "40px" }}
                    fontSize={{ base: "24px", lg: "32px" }}
                    color={"white"}
                  >
                    SMK Negeri 05 Makassar
                  </Text>
                  <Text
                    fontSize={{ base: "12px", lg: "16px" }}
                    mt={{ base: "10px", lg: "20px" }}
                    color={"white"}
                  >
                    2013 - 2017 Informatics Engineering
                  </Text>
                  <Text
                    mt={{ base: "10px", lg: "20px" }}
                    fontSize={{ base: "24px", lg: "32px" }}
                    color={"white"}
                  >
                    Universitas Muslim Indonesia
                  </Text>
                  <Text
                    fontSize={{ base: "12px", lg: "16px" }}
                    mt={{ base: "10px", lg: "20px" }}
                    color={"white"}
                  >
                    2017 - 2023 Informatics Engineering
                  </Text>
                </Stack>
              </Box>
              <Box
                mr={{ lg: "80px" }}
                mt={{ sm: "5px", md: "20px", lg: "0px" }}
              >
                <Text color={"#E9B785"} fontSize={"24px"} mt={"80px"}>
                  Bootcamp
                </Text>
                <Text
                  fontSize={{ base: "24px", lg: "32px" }}
                  mt={{ base: "20px", md: "30px", lg: "40px" }}
                  color={"white"}
                >
                  Purwadhika Digital Technology School
                </Text>
                <Text
                  fontSize={{ base: "12px", lg: "16px" }}
                  mt={{ base: "10px", lg: "20px" }}
                  color={"white"}
                >
                  May, 2023 - August 2023
                </Text>
                <Stack
                  fontSize={{ base: "12px", lg: "16px" }}
                  mt={{ base: "10px", lg: "20px" }}
                  color={"white"}
                >
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
        <Stack id="project">
          <Text
            ml={{ base: "30px", lg: "100px" }}
            color={"#E9B785"}
            fontSize={{ sm: "24px", md: "48px", lg: "64px" }}
            mt={{ base: "100px", lg: "400px" }}
            fontFamily={"montserrat"}
          >
            My Project
          </Text>

          <Box
            w={{ sm: "350px", md: "800px", lg: "1240px" }}
            mr={{ base: "30px", md: "80px", lg: "0px" }}
            ml={{ base: "30px", md: "80px", lg: "100px" }}
            h={{ base: "150px", md: "800px", lg: "600px" }}
          >
            <Flex
              // ml={{ base: "30px", lg: "100px" }}
              wrap={"wrap"}
              className="listProject"
            >
              <Project />
              <Project3 />
              <Project4 />
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
