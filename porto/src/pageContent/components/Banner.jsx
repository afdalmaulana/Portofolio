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
      {/* <motion.div
        // initial={{ scaleX: 0 }}
        // animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        // transition={{ duration: 0.8, ease: "easeInOut" }}
      > */}
      {/* <motion.div
          initial={{ x: "100%", width: "100%", background: "black" }}
          animate={{ x: "0%", width: "100%", background: "black" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          // exit={{
          //   x: "-100%", // Pindahkan elemen keluar dari layar ke kiri saat keluar
          //   width: "100%",
          //   background: "black", // Ganti latar belakang menjadi hitam saat keluar
          //   transition: { duration: 0.8, ease: "easeInOut" },
          // }}
        > */}
      {/* <motion.div
            // className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
            initial={{ x: "100%", width: "100%", background: "yellow" }}
            animate={{ x: "0%", width: "100%", background: "yellow" }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          > */}
      <Box
        bgColor={"#073b4c"}
        // h={"100vh"}
        // h={{ base: "250px", md: "480", lg: "720px" }}
      >
        <Stack mt={"60px"}>
          <Flex>
            <Box
              background="transparent"
              mt={{ base: "50px", md: "40px", lg: "100px" }}
              ml={{ base: "30px", md: "40px", lg: "100px" }}
              color={"white"}
              className="banner"
              w={{ base: "300px", md: "400px", lg: "640px" }}
            >
              <Fade
                triggerOnce={true}
                direction="down"
                fraction={1}
                cascade={true}
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
                </Fade>
              </Flex>
              <Fade
                direction="down"
                triggerOnce={true}
                cascade={true}
                delay={2000}
              >
                <Text
                  fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
                  mt={"20px"}
                  fontFamily={"montserrat"}
                >
                  Follow me on :
                </Text>
                <section>
                  <Flex>
                    <Link
                      to={"https://github.com/afdalmaulana"}
                      target="_blank"
                    >
                      <Image
                        _hover={{
                          transform: "scale(1.1)",
                          cursor: "pointer",
                        }}
                        src="github.png"
                        w={{
                          base: "35px",
                          md: "40px",
                          lg: "80px",
                          xl: "100px",
                        }}
                        h={{
                          base: "35px",
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
                          base: "35px",
                          md: "40px",
                          lg: "80px",
                          xl: "100px",
                        }}
                        h={{
                          base: "35px",
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
                          base: "35px",
                          md: "40px",
                          lg: "80px",
                          xl: "100px",
                        }}
                        h={{
                          base: "35px",
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
                    w={{ base: "85px", lg: "200px" }}
                    h={{ base: "20px", lg: "50px" }}
                    onClick={onOpen}
                    fontSize={{ base: "6px", lg: "16px" }}
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
                      "https://drive.google.com/file/d/1Ca8LDcX20HbUTSyV69Guv5o3l3SMlW4C/view?usp=sharing"
                    }
                    target="_blank"
                  >
                    <Button
                      mt={{ base: "10px", lg: "50px" }}
                      ml={{ base: "5px", md: "20px", lg: "30px" }}
                      w={{ base: "120px", lg: "200px" }}
                      h={{ base: "20px", lg: "50px" }}
                      fontSize={{ base: "6px", lg: "16px" }}
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
            <Fade delay={3000} triggerOnce={true}>
              <ProfilePic />
            </Fade>
          </Flex>
        </Stack>
      </Box>
      {/* </motion.div>
        </motion.div>
      </motion.div> */}
    </>
  );
};

export default AnimateTransaction(Banner);
