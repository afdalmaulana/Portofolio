import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <Link to={"/"}>
        <Box ml={{ base: "10px" }}>
          <Text fontSize={{ base: "40px" }} color={"white"} mt={"5px"}>
            Portofolio
          </Text>
        </Box>
      </Link>
    </>
  );
}
