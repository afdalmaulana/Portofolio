import { Button } from "@chakra-ui/react";
import Hamburger from "./hamburger";
import { Link } from "react-scroll";

export default function Education() {
  return (
    <>
      <Link to="education" smooth={true}>
        <Button
          mt={"10px"}
          mr={"10px"}
          colorScheme={"gray"}
          w={{ base: "25px", md: "75px", lg: "100px" }}
          fontSize={{ base: "8px", md: "12px", lg: "15px" }}
          variant={"outline"}
        >
          Education
        </Button>
      </Link>
    </>
  );
}
