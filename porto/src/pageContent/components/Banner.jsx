import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";
import ProfilePic from "./avatar";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <>
      <Box bgColor={"#073b4c"} h={{ base: "250px", md: "480", lg: "720px" }}>
        <Stack mt={"60px"}>
          <Flex>
            <Box
              mt={{ base: "50px", md: "40px", lg: "100px" }}
              ml={{ base: "30px", md: "80px", lg: "100px" }}
              color={"white"}
              className="banner"
              w={{ base: "230px", md: "400px", lg: "640px" }}
            >
              <Text fontSize={{ sm: "12px", md: "20px", lg: "30px" }}>
                Hello, I'm
              </Text>
              <Text
                fontSize={{ sm: "16px", md: "32px", lg: "48px" }}
                fontWeight={"bold"}
                fontFamily={"montserrat"}
              >
                Muh. Afdal Maulana Said
              </Text>
              <Text
                fontFamily={"montserrat"}
                fontSize={{ sm: "8px", md: "24px", lg: "40px" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Junior Frontend Developer",
                      "Junior Software Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Text>
              <Text
                fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
                mt={"20px"}
                fontFamily={"montserrat"}
              >
                Follow me on :
              </Text>
              <section>
                <Flex>
                  <Link to={"https://github.com/afdalmaulana"} target="_blank">
                    <Image
                      _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                      src="github.png"
                      w={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                      h={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                    ></Image>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/muhafdalmaulanasaid/"}
                    target="_blank"
                  >
                    <Image
                      _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                      ml={"10px"}
                      src="linked.png"
                      w={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                      h={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                    ></Image>
                  </Link>
                  <Link
                    to={"https://www.instagram.com/afdalmaulanaaa/"}
                    target="_blank"
                  >
                    <Image
                      _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                      ml={"10px"}
                      src="instagram.png"
                      w={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                      h={{ base: "35px", md: "40px", lg: "80px", xl: "100px" }}
                    ></Image>
                  </Link>
                </Flex>
              </section>
            </Box>
            <ProfilePic />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
