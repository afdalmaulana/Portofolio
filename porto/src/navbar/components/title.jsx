import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <Link to={"/"}>
        <Box ml={{ base: "10px", lg: "40px" }}>
          <Text
            py={{ base: "12px", lg: "2px" }}
            px={{ base: "12px", lg: "2px" }}
            fontSize={{ base: "24px", lg: "36px" }}
            color={"#D8C5B2"}
            // mt={"5px"}
            fontFamily={"bitter"}
          >
            Portfolio
          </Text>
        </Box>
      </Link>
    </>
  );
}
