import {
  Avatar,
  Box,
  Button,
  Stack,
  Text,
  transform,
  useDisclosure,
} from "@chakra-ui/react";
import "../../style/main.css";
import TypeIt from "typeit-react";

import { Link } from "react-router-dom";

export default function ProfilePic() {
  return (
    <>
      <Box>
        <Box
          className="foto"
          mt={{ base: "10px", sm: "0px", md: "0px", lg: "0px" }}
          mr={{ base: "8px", sm: "0px", md: "0px", lg: "0px" }}
          // mt={{ base: "30px", md: "40px", lg: "0px" }}
          ml={{ base: "10px", md: "120px", lg: "120px" }}
          // bgColor={"red"}
          w={{ base: "140px", md: "300px", lg: "450px" }}
          // w={"250px"}
          h={{ base: "240px", md: "480px", lg: "720px" }}
          // w={{ base: "25px", md: "75px", lg: "100px" }}
          opacity={200}
          // borderRadius={{ base: "100px", md: "100px", lg: "150px" }}
          backgroundImage={"afdaaal.png"}
          // _hover={{ transform: "scale(1.1)" }}
          backgroundSize={"cover"}
        ></Box>
        <Stack></Stack>
      </Box>
      {/* <Avatar src="afdal.jpg" size={"xl"} /> */}
    </>
  );
}
