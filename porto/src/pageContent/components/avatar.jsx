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
            w={{ base: "300px", lg: "400px" }}
            top={{ lg: "200px" }}
            bottom={{ base: "130px", lg: "0px" }}
            left={{ base: "60px", lg: "770px" }}
            h={{ base: "320px", lg: "505px" }}
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
            w={{ base: "280px", lg: "380px" }}
            top={{ base: "510px", lg: "210px" }}
            left={{ base: "70px", lg: "780px" }}
            h={{ base: "300px", lg: "487px" }}
            border={"10px"}
            borderColor={"#D8C5B2"}
            borderLeftColor={"black"}
            borderTopColor={"black"}
            borderStyle={"dotted"}
            zIndex={1}
          ></Box>

          {/* ini border paling ketiga */}
          <Box
            display={{ base: "none", lg: "flex" }}
            position={"absolute"}
            w={{ base: "390px", lg: "360px" }}
            top={{ lg: "220px" }}
            left={{ base: "10px", lg: "790px" }}
            h={{ base: "520px", lg: "470px" }}
            bottom={{ base: "150px", lg: "0px" }}
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
          <Image
            display={{ lg: "none" }}
            position={"absolute"}
            zIndex={20000}
            src="afdaaal.png"
            left={20}
            bottom={"150px"}
            h={"400px"}
            // boxSize="100%"
            objectFit="cover"
          />
          <Image
            display={{ lg: "none" }}
            position="absolute"
            left={20}
            bottom={"150px"}
            h={"400px"}
            zIndex={0} // Atur zIndex lebih rendah dari border
            src="afdaaal.png"
            objectFit="cover"
            // other props...
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
        </Box>
      </Fade>
      {/* <Avatar src="afdal.jpg" size={"xl"} /> */}
    </>
  );
}
