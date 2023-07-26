import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  transform,
  useDisclosure,
} from "@chakra-ui/react";
import "../../style/main.css";
import TypeIt from "typeit-react";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function ProfilePic() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box
          className="foto"
          mt={{ base: "30px", md: "40px", lg: "150px" }}
          ml={{ base: "20px", md: "160px", lg: "200px" }}
          bgColor={"red"}
          w={{ base: "100px", md: "150px", lg: "250px" }}
          // w={"250px"}
          h={{ base: "100px", md: "150px", lg: "250px" }}
          // w={{ base: "25px", md: "75px", lg: "100px" }}
          opacity={200}
          borderRadius={{ base: "100px", md: "100px", lg: "150px" }}
          backgroundImage={"afdal.jpg"}
          _hover={{ transform: "scale(1.1)" }}
          backgroundSize={"cover"}
        ></Box>
        <Stack>
          <Button
            mt={{ base: "20px", lg: "80px" }}
            ml={{ base: "25px", lg: "250px" }}
            w={{ base: "85px", lg: "150px" }}
            h={{ base: "20px", lg: "30px" }}
            onClick={onOpen}
            fontSize={{ base: "6px", lg: "12px" }}
            fontFamily={"montserrat"}
            leftIcon={<HiOutlineMail />}
            rightIcon={<BiPhoneCall />}
            borderRadius={{ base: "5px", lg: "10px" }}
          >
            Get in touch
          </Button>
          <Link
            to={
              "https://drive.google.com/file/d/1i9q4CWWO8n00DGjAZg2xBdma8vo7ETJs/view?usp=drive_link"
            }
            target="_blank"
          >
            <Button
              mt={{ base: "0px", lg: "20px" }}
              ml={{ base: "5px", lg: "200px" }}
              w={{ base: "120px", lg: "250px" }}
              h={{ base: "20px", lg: "50px" }}
              fontSize={{ base: "6px", lg: "16px" }}
              leftIcon={<AiOutlineFileSearch />}
              borderRadius={{ base: "5px", lg: "10px" }}
              fontFamily={"montserrat"}
              bgColor={"black"}
              variant={""}
              color={"yellow"}
            >
              Curriculum Vitae
            </Button>
          </Link>

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
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Stack>
      </Box>
      {/* <Avatar src="afdal.jpg" size={"xl"} /> */}
    </>
  );
}
