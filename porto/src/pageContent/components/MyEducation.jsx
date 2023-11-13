import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";

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
        // bgColor={"#292e33"}
        bgColor={"#073b4c"}
        id="education"
        px={{ base: "30px", sm: "30px", lg: "100px" }}
        py={{ base: "20px", sm: "20px", lg: "150px" }}
        maxW={"100%"}
        fontFamily={"montserrat"}
      >
        <Stack w={"100%"}>
          <Flex
            className="education"
            flexDirection={{ sm: "column", lg: "row" }}
            justifyContent={"space-between"}
          >
            <Fade direction="down" cascade={true} triggerOnce={true}>
              <Box w={"100%"}>
                <Text
                  color={"#E9B785"}
                  fontFamily={"bitter"}
                  fontSize={{ base: "24px" }}
                >
                  Education
                </Text>
                <Stack>
                  <Text
                    mt={{ base: "15px", md: "30px", lg: "40px" }}
                    fontSize={{ base: "16px", lg: "32px" }}
                    color={"white"}
                  >
                    SMK Negeri 05 Makassar
                  </Text>
                  <Text
                    fontSize={{ base: "8px", lg: "16px" }}
                    mt={{ base: "0px", md: "10px", lg: "20px" }}
                    color={"white"}
                  >
                    2013 - 2017 Informatics Engineering
                  </Text>
                  <Text
                    mt={{ base: "10px", md: "10px", lg: "20px" }}
                    fontSize={{ base: "16px", lg: "32px" }}
                    color={"white"}
                  >
                    Universitas Muslim Indonesia
                  </Text>
                  <Text
                    fontSize={{ base: "8px", lg: "16px" }}
                    mt={{ base: "0px", md: "10px", lg: "20px" }}
                    color={"white"}
                  >
                    2017 - 2022 Informatics Engineering
                  </Text>
                </Stack>
              </Box>
              <Box w={"100%"} mt={{ base: "32px", sm: "24px", lg: "0px" }}>
                <Text color={"#E9B785"} fontSize={"24px"} fontFamily={"bitter"}>
                  Bootcamp
                </Text>
                <Text
                  fontSize={{ base: "16px", lg: "32px" }}
                  mt={{ base: "20px", md: "30px", lg: "40px" }}
                  color={"white"}
                >
                  Purwadhika Digital Technology School
                </Text>
                <Text
                  fontSize={{ base: "8px", lg: "16px" }}
                  mt={{ base: "0px", sm: "10px", lg: "20px" }}
                  color={"white"}
                >
                  May, 2023 - August 2023
                </Text>
                <Stack
                  fontSize={{ base: "12px", lg: "16px" }}
                  mt={{ base: "20px", md: "", lg: "20px" }}
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
      </Box>
    </>
  );
}
