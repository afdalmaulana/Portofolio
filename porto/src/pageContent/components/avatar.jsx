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
          {/* ini border paling luar */}
          <Box
            position={"absolute"}
            w={{ base: "390px", lg: "400px" }}
            top={{ lg: "200px" }}
            left={{ base: "10px", lg: "770px" }}
            h={{ base: "520px", lg: "505px" }}
            border={"10px"}
            borderColor={"black"}
            borderBottomColor={"#D8C5B2"}
            borderRightColor={"#D8C5B2"}
            borderStyle={"dotted"}
            zIndex={1}
          ></Box>

          {/* ini border paling kedua */}
          <Box
            position={"absolute"}
            w={{ base: "372px", lg: "380px" }}
            top={{ base: "380px", lg: "210px" }}
            left={{ base: "19px", lg: "780px" }}
            h={{ base: "505px", lg: "487px" }}
            border={"10px"}
            borderColor={"#D8C5B2"}
            borderLeftColor={"black"}
            borderTopColor={"black"}
            borderStyle={"dotted"}
            zIndex={1}
          ></Box>

          {/* ini border paling ketiga */}
          <Box
            position={"absolute"}
            w={{ base: "390px", lg: "360px" }}
            top={{ lg: "220px" }}
            left={{ base: "10px", lg: "790px" }}
            h={{ base: "520px", lg: "470px" }}
            border={"10px"}
            borderColor={"#D8C5B2"}
            borderLeftColor={"black"}
            // borderColor={"yellow"}
            borderStyle={"dotted"}
            borderTopColor={"black"}
            zIndex={1}
          ></Box>
          <Image
            display={{ base: "none", md: "flex" }}
            position={"absolute"}
            zIndex={20000}
            src="afdaaal.png"
            h={"600px"}
            // boxSize="100%"
            objectFit="cover"
          />

          {/* <Image
            display={{ lg: "none" }}
            position={"absolute"}
            left={{ base: "0" }}
            bottom={{ base: "10px" }}
            zIndex={20000}
            // h={"500px"}
            src="afdaaal.png"
            // boxSize="100%"
            objectFit="cover"
          /> */}

          {/* image ini tampil saat layar kecil */}
          <Image
            display={{ lg: "none" }}
            position="absolute"
            left={2}
            bottom={"20px"}
            h={"600px"}
            zIndex={0} // Atur zIndex lebih rendah dari border
            src="afdaaal.png"
            objectFit="cover"
            // other props...
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
