import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

import "../../style/main.css";

export default function AboutMe() {
  return (
    <>
      <Link to="about" smooth={true}>
        <Box className="aboutme">
          <Button
            mt={"10px"}
            mr={"10px"}
            colorScheme="white"
            w={{ base: "25px", md: "75px", lg: "100px" }}
            fontSize={{ base: "8px", md: "12px", lg: "15px" }}
            color={"white"}
          >
            About
          </Button>
        </Box>
      </Link>
    </>
  );
}
