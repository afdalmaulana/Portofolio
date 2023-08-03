import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Avatar from "./avatar";
import ProfilePic from "./avatar";
import Typewriter from "typewriter-effect";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";

export default function Banner() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
              <Text
                fontSize={{ sm: "12px", md: "20px", lg: "30px" }}
                fontFamily={"montserrat"}
              >
                Hello, I'm
              </Text>
              <Text
                fontSize={{ sm: "16px", md: "32px", lg: "48px" }}
                fontWeight={"bold"}
                fontFamily={"montserrat"}
              >
                Muh. Afdal Maulana Said
              </Text>
              <Flex gap={"2"}>
                <Text
                  fontFamily={"montserrat"}
                  fontSize={{ sm: "8px", md: "24px", lg: "40px" }}
                >
                  Junior
                </Text>
                <Text
                  fontFamily={"montserrat"}
                  fontSize={{ sm: "8px", md: "24px", lg: "40px" }}
                >
                  <Typewriter
                    options={{
                      strings: [" Web Developer", " Frontend Developer"],
                      autoStart: true,
                      loop: true,
                      speed: 1000,
                    }}
                  />
                </Text>
              </Flex>
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
              <Button
                mt={{ base: "10px", lg: "50px" }}
                w={{ base: "85px", lg: "200px" }}
                h={{ base: "20px", lg: "50px" }}
                onClick={onOpen}
                fontSize={{ base: "6px", lg: "16px" }}
                fontFamily={"montserrat"}
                leftIcon={<HiOutlineMail />}
                rightIcon={<BiPhoneCall />}
                borderRadius={{ base: "5px", lg: "10px" }}
                bgColor={"black"}
                variant={""}
                color={"white"}
              >
                Get in touch
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bgColor={"#435B66"} color={"white"}>
                  <ModalHeader>My Contact</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Stack
                      fontFamily={"montserrat"}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      <Text>08124214977</Text>
                      <Text>afdalmaulanaaa@gmail.com</Text>
                    </Stack>
                  </ModalBody>

                  <ModalFooter>
                    <Button colorScheme="red" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
            <ProfilePic />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
