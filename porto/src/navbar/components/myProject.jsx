import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-scroll";

import "../../style/main.css";

export default function MyProject() {
  return (
    <>
      <Box>
        <Link to="project" smooth={true}>
          <Box className="projectme">
            <Button
              mt={"10px"}
              mr={"10px"}
              colorScheme="white"
              w={{ base: "25px", md: "75px", lg: "100px" }}
              fontSize={{ base: "8px", md: "12px", lg: "15px" }}
              color={"white"}
              focusBorderColor={"black"}
            >
              My Project
            </Button>
          </Box>
        </Link>
      </Box>
    </>
  );
}
