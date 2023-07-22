import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <Link to={"/"}>
        <Box ml={"20px"}>
          <Text
            fontSize={{ base: "30px", md: "30px", lg: "40px" }}
            color={"white"}
            mt={{ sm: "10px", lg: "0" }}
          >
            Portofolio
          </Text>
        </Box>
      </Link>
    </>
  );
}
