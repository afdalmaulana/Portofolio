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
import { Link, useNavigate } from "react-router-dom";
import Avatar from "./avatar";
import ProfilePic from "./avatar";
import Typewriter from "typewriter-effect";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

import { motion, useIsPresent } from "framer-motion";
import AnimateTransaction from "../../components/AnimateTransaction";
const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toProjects = () => navigate("/pageProject");
  const isPresent = useIsPresent();
  return (
    <>
      <Box
        // bgColor={"#073b4c"}
        bgColor={"#292E33"}
        h={"100vh"}
        // h={{ base: "250px", md: "480", lg: "720px" }}
        py={"80px"}
        px={"20px"}
      >
        {/* <Stack mt={"60px"} bgColor={"red"}> */}
        <Flex wrap={"wrap"} justifyContent={"center"}>
          <Box
            // bgColor={"red"}
            // background="transparent"
            // mt={{ base: "50px", md: "40px", lg: "100px" }}
            // mt={{ base: "50px", md: "40px", lg: "100px" }}
            w={{ base: "100%", md: "45%" }} // Atur lebar untuk layar berukuran besar dan ke bawah
            p={{ base: "20px", md: "40px", lg: "80px" }} // Padding agar kontennya tidak berjauhan
            // ml={{ base: "30px", md: "40px", lg: "100px" }}
            color={"white"}
            className="banner"
            // w={{ base: "300px", md: "400px", lg: "640px" }}
          >
            <Fade
              triggerOnce={true}
              direction="down"
              fraction={1}
              cascade={true}
            >
              <Text
                fontSize={{ base: "24px", sm: "24px", md: "20px", lg: "30px" }}
                fontFamily={"montserrat"}
              >
                Hello, I'm
              </Text>
              <Text
                fontSize={{ base: "24px", sm: "32px", md: "32px", lg: "36px" }}
                fontWeight={"bold"}
                fontFamily={"montserrat"}
              >
                Muh. Afdal Maulana Said
              </Text>
            </Fade>
            <Flex gap={"2"}>
              <Fade
                direction="up"
                triggerOnce={true}
                delay={1000}
                cascade={true}
              >
                <Text
                  fontFamily={"montserrat"}
                  fontSize={{ base: "22px", sm: "8px", md: "24px", lg: "32px" }}
                >
                  Junior
                </Text>
                <Text
                  fontFamily={"montserrat"}
                  fontSize={{ base: "22px", sm: "8px", md: "24px", lg: "32px" }}
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
              </Fade>
            </Flex>
            <Fade
              direction="down"
              triggerOnce={true}
              cascade={true}
              delay={2000}
            >
              <Text
                fontSize={{ base: "24px", sm: "16px", md: "24px", lg: "32px" }}
                mt={"20px"}
                fontFamily={"montserrat"}
              >
                Follow me on :
              </Text>
              <section>
                <Flex>
                  <Link to={"https://github.com/afdalmaulana"} target="_blank">
                    <Image
                      _hover={{
                        transform: "scale(1.1)",
                        cursor: "pointer",
                      }}
                      src="github.png"
                      w={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                      h={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                    ></Image>
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/muhafdalmaulanasaid/"}
                    target="_blank"
                  >
                    <Image
                      _hover={{
                        transform: "scale(1.1)",
                        cursor: "pointer",
                      }}
                      ml={"10px"}
                      src="linked.png"
                      w={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                      h={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                    ></Image>
                  </Link>
                  <Link
                    to={"https://www.instagram.com/afdalmaulanaaa/"}
                    target="_blank"
                  >
                    <Image
                      _hover={{
                        transform: "scale(1.1)",
                        cursor: "pointer",
                      }}
                      ml={"10px"}
                      src="instagram.png"
                      w={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                      h={{
                        base: "50px",
                        md: "40px",
                        lg: "80px",
                        xl: "100px",
                      }}
                    ></Image>
                  </Link>
                </Flex>
              </section>
            </Fade>
            <Fade delay={3000} triggerOnce={true} cascade={true}>
              <Flex>
                <Button
                  mt={{ base: "10px", lg: "50px" }}
                  w={{ base: "160px", lg: "200px" }}
                  h={{ base: "30px", lg: "50px" }}
                  onClick={onOpen}
                  fontSize={{ base: "12px", lg: "16px" }}
                  fontFamily={"montserrat"}
                  leftIcon={<HiOutlineMail />}
                  borderRadius={{ base: "5px", lg: "10px" }}
                  bgColor={"black"}
                  variant={""}
                  color={"white"}
                >
                  Get in touch
                </Button>
                <Link
                  to={
                    "https://drive.google.com/file/d/1g2RePUCpdplGUnCJ4Sz3jNBtq-ocbhDz/view?usp=drive_link"
                  }
                  target="_blank"
                >
                  <Button
                    mt={{ base: "10px", lg: "50px" }}
                    ml={{ base: "5px", md: "20px", lg: "30px" }}
                    w={{ base: "160px", lg: "200px" }}
                    h={{ base: "30px", lg: "50px" }}
                    fontSize={{ base: "12px", lg: "16px" }}
                    leftIcon={<AiOutlineFileSearch />}
                    borderRadius={{ base: "5px", lg: "10px" }}
                    fontFamily={"montserrat"}
                    bgColor={"black"}
                    variant={""}
                    color={"white"}
                  >
                    Curriculum Vitae
                  </Button>
                </Link>
              </Flex>
            </Fade>

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
          <Box
            px={"42px"}
            // p={{ base: "0px", md: "40px", lg: "80px" }}
            w={{ base: "100%", md: "45%" }}
            // bgColor={"cyan"}
          >
            <ProfilePic />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AnimateTransaction(Banner);
