import { Avatar, Box, transform } from "@chakra-ui/react";
import "../../style/main.css";

export default function ProfilePic() {
  return (
    <>
      {/* <Box borderRadius={"50px"} bgColor={"blue"} bgImage={"afdal.jpg"}></Box> */}
      <Box
        className="foto"
        mt={{ base: "50px", md: "40px", lg: "100px" }}
        ml={{ base: "80px", md: "160px", lg: "200px" }}
        bgColor={"red"}
        w={{ base: "100px", md: "150px", lg: "250px" }}
        // w={"250px"}
        h={{ base: "100px", md: "150px", lg: "250px" }}
        // w={{ base: "25px", md: "75px", lg: "100px" }}
        opacity={200}
        borderRadius={{ base: "100px", md: "100px", lg: "150px" }}
        backgroundImage={"afdal.jpg"}
        backgroundSize={"cover"}
      ></Box>
      {/* <Avatar src="afdal.jpg" size={"xl"} /> */}
    </>
  );
}
