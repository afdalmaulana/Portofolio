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
        // bgColor={"#d8ccbe"}
        bgColor={"#435B66"}
        h={{ base: "800px", md: "650px", lg: "750px", xl: "850px" }}
      >
        <Stack>
          <Box
            ml={{ base: "30px", lg: "100px" }}
            mt={{ base: "50px", md: "60px", lg: "100px" }}
            fontFamily={"montserrat"}
          >
            <Fade direction="up" cascade triggerOnce={true}>
              <Text
                // color={"#60574c"}
                color={"white"}
                fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
              >
                A bit about me
              </Text>
              <Text
                color={"white"}
                fontSize={{ sm: "24px", md: "32px", lg: "64px" }}
              >
                Who am I ?
              </Text>
              <Box
                // ml={{ md: 2 }}
                mr={{ base: 10, md: 100, lg: 100 }}
                w={{ sm: "350px", md: "800px", lg: "1240px" }}
              >
                <Text
                  align={"justify"}
                  color={"white"}
                  fontSize={{ base: "10px", md: "12px", lg: "20px" }}
                >
                  Graduated from the Indonesian Muslim University Makassar
                  majoring in Informatics Engineering with a Bachelor of
                  Computer (S.Kom) degree and Microsoft Technology Associate
                  (MTA) with a GPA of 3.51 / 4.00. Born in Belawa, Wajo, on July
                  26, 1998. Active and involved in several organizational
                  activities on campus and outside campus. I am a punctual
                  person, persuasive in communicating, objective in assessing
                  things, besides that I also think critically, creatively and
                  dynamically. I can work under pressure and easily recognize
                  new environments, can also work with a team or individually. I
                  like to learn something new and still want to keep learning
                </Text>
              </Box>
              <Text
                id="about"
                // color={"#60574c"}
                color={"white"}
                fontSize={{ base: "24px", md: "24px", lg: "40px" }}
                mt={{ base: "40px", md: "48px", lg: "64px" }}
              >
                Skills
              </Text>
            </Fade>
          </Box>
        </Stack>
        <Skills />
      </Box>
    </>
  );
}
