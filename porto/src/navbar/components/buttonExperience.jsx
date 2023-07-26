import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function ButtonExpe() {
  return (
    <>
      <Link to="experience" smooth={true}>
        <Box className="aboutme">
          <Button
            mt={"10px"}
            mr={"10px"}
            colorScheme="white"
            w={{ base: "0px", md: "75px", lg: "100px" }}
            fontSize={{ base: "0px", md: "12px", lg: "15px" }}
            color={"white"}
          >
            Experience
          </Button>
        </Box>
      </Link>
    </>
  );
}