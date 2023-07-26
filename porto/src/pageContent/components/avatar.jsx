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
export default function ProfilePic() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Box
          className="foto"
          mt={{ base: "50px", md: "40px", lg: "150px" }}
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
            ml={{ base: "30px", lg: "250px" }}
            w={{ base: "80px", lg: "150px" }}
            h={{ base: "20px", lg: "50px" }}
            onClick={onOpen}
            fontSize={{ base: "10px", lg: "16px" }}
            fontFamily={"montserrat"}
            borderRadius={"10px"}
          >
            Get in touch
          </Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>My Contact</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack fontFamily={"montserrat"}>
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
