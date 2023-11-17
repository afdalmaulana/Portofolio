import { Box, Button, IconButton, useMediaQuery } from "@chakra-ui/react";
import { Link } from "react-scroll";

import "../../style/main.css";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ButtonAboutMe() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <Link to="about" smooth={true}>
        <Box>
          <IconButton
            colorScheme="green"
            aria-label="Back to top"
            // fontSize={{ base: "10px", md: "12px", lg: "15px" }}
            icon={<AiOutlineArrowUp />}
            iconSpacing={0}
          ></IconButton>
        </Box>
      </Link>
    </>
  );
}
