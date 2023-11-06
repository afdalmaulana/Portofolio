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
import { Fade } from "react-awesome-reveal";

export default function AboutMe() {
  return (
    <>
      <Box
        id="about"
        className="aboutme"
        bgColor={"#FFFBF5"}
        // h={{ base: "800px", md: "550px", lg: "750px", xl: "850px" }}
      >
        <Box px={"40px"} py={"50px"} fontFamily={"montserrat"}>
          <Fade direction="up" cascade={true} triggerOnce={true}>
            <Text
              color={"black"}
              fontFamily={"bitter"}
              fontSize={{ sm: "16px", md: "16px", lg: "32px" }}
            >
              A bit about me
            </Text>
            <Text
              color={"black"}
              fontSize={{ base: "32px", sm: "32px", md: "32px", lg: "64px" }}
            >
              Who am I ?
            </Text>
            <Box>
              <Text
                align={"justify"}
                color={"black"}
                fontSize={{ base: "10px", md: "12px", lg: "20px" }}
              >
                Graduated from the Indonesian Muslim University Makassar
                majoring in Informatics Engineering with a Bachelor of Computer
                (S.Kom) degree and Microsoft Technology Associate (MTA) with a
                GPA of 3.51 / 4.00. Born in Belawa, Wajo, on July 26, 1998.
                Active and involved in several organizational activities on
                campus and outside campus. I am a punctual person, persuasive in
                communicating, objective in assessing things, besides that I
                also think critically, creatively and dynamically. I can work
                under pressure and easily recognize new environments, can also
                work with a team or individually. I like to learn something new
                and still want to keep learning
              </Text>
            </Box>
          </Fade>
          <Fade cascade={true} triggerOnce={true}>
            <Text
              id="about"
              color={"#60574c"}
              // color={"white"}
              fontSize={{ base: "24px", md: "24px", lg: "40px" }}
              mt={{ base: "40px", md: "48px", lg: "64px" }}
            >
              Skills
            </Text>
            <Skills />
          </Fade>
        </Box>
      </Box>
    </>
  );
}
