import {
  Avatar,
  Box,
  Button,
  Image,
  Stack,
  Text,
  transform,
  useDisclosure,
} from "@chakra-ui/react";
import "../../style/main.css";
import TypeIt from "typeit-react";
import { Fade } from "react-awesome-reveal";

import { Link } from "react-router-dom";

export default function ProfilePic() {
  return (
    <>
      <Fade delay={2000} triggerOnce>
        <Box
          // w="300px"
          // h="500px"
          px={"10px"}
          // border={"1px"}
        >
          {/* <Box
            display={{ base: "none", md: "flex" }}
            position={"absolute"}
            w={{ lg: "400px" }}
            top={"200px"}
            h={"495px"}
            border={"1px"}
            borderColor={"black"}
            zIndex={1}
          ></Box> */}
          <Image
            // position={"absolute"}
            zIndex={20000}
            src="afdaaal.png"
            // boxSize="100%"
            objectFit="cover"
          />
        </Box>
      </Fade>
      {/* <Box px={"20px"} border={"1px"} borderColor={"black"}>
        <Box
          className="foto"
          mt={{ base: "10px", sm: "0px", md: "0px", lg: "0px" }}
          // mt={{ base: "30px", md: "40px", lg: "0px" }}
          // ml={{ base: "10px", md: "120px", lg: "120px" }}
          // bgColor={"red"}
          w={{ base: "140px", md: "300px", lg: "450px" }}
          // w={"250px"}
          h={{ base: "240px", md: "480px", lg: "500px" }}
          // w={{ base: "25px", md: "75px", lg: "100px" }}
          opacity={200}
          // borderRadius={{ base: "100px", md: "100px", lg: "150px" }}
          backgroundImage={"afdaaal.png"}
          // _hover={{ transform: "scale(1.1)" }}
          // backgroundSize={"cover"}
          backgroundSize="contain" // Sesuaikan dengan 'contain' atau 'cover' sesuai kebutuhan
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
        ></Box>
      </Box> */}
      {/* <Avatar src="afdal.jpg" size={"xl"} /> */}
    </>
  );
}
