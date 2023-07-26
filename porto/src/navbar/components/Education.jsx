import { Box, Button } from "@chakra-ui/react";
import Hamburger from "./hamburger";
import { Link } from "react-scroll";

import "../../style/main.css";

export default function Education() {
  return (
    <>
      <Link to="education" smooth={true}>
        <Box className="education">
          <Button
            mt={"10px"}
            mr={"10px"}
            colorScheme="green"
            w={{ base: "0px", md: "75px", lg: "100px" }}
            fontSize={{ base: "0px", md: "12px", lg: "15px" }}
          >
            Education
          </Button>
        </Box>
      </Link>
    </>
  );
}
