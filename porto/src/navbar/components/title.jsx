import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <Link to={"/"}>
        <Box ml={{ base: "10px", lg: "40px" }}>
          <Text
            fontSize={{ base: "40px" }}
            color={"white"}
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
