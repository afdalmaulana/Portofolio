import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Skills from "./skills";

export default function AboutMe() {
  return (
    <>
      <Box
        bgColor={"#d8ccbe"}
        h={{ base: "550px", md: "650px", lg: "750px", xl: "800px" }}
      >
        <Stack ml={"100px"}>
          <Text id="about" color={"#60574c"} fontSize={"32px"} mt={"64px"}>
            A bit about me
          </Text>
          <Text color={"black"} fontSize={"64"}>
            Who am I ?
          </Text>
          {/* <Box
            bgColor={"green"}
            w={{ base: "200px", md: "650px", lg: "800px", xl: "1200px" }}
            h={{ base: "20px", md: "50px", lg: "200px", xl: "150px" }}
          > */}
          <Box ml={{ md: 2 }} mr={{ base: 100, md: 100, lg: 100 }}>
            <Text
              align={"justify"}
              fontSize={{ base: "10px", md: "12px", lg: "20px" }}
            >
              Graduated from the Indonesian Muslim University Makassar majoring
              in Informatics Engineering with a Bachelor of Computer (S.Kom)
              degree and Microsoft Technology Associate (MTA) with a GPA of 3.51
              / 4.00. Born in Belawa, Wajo, on July 26, 1998. Active and
              involved in several organizational activities on campus and
              outside campus. I am a punctual person, persuasive in
              communicating, objective in assessing things, besides that I also
              think critically, creatively and dynamically. I can work under
              pressure and easily recognize new environments, can also work with
              a team or individually. I like to learn something new and still
              want to keep learning
            </Text>
          </Box>
          {/* </Box> */}
          <Text id="about" color={"#60574c"} fontSize={"32px"} mt={"64px"}>
            Skills
          </Text>
          <Box>
            <Skills />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
