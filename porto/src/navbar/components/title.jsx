import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Title() {
  return (
    <>
      <Link to={"/"}>
        <Box ml={"20px"}>
          <Text fontSize={"40px"} color={"gray"}>
            Portofolio
          </Text>
        </Box>
      </Link>
    </>
  );
}
