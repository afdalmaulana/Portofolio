import { Button } from "@chakra-ui/react";
import Hamburger from "./hamburger";

export default function Education() {
  return (
    <>
      <Button
        mt={"10px"}
        mr={"10px"}
        colorScheme={"blac"}
        w={{
          base: `${(<Hamburger />)}`,
          md: `${(<Hamburger />)}`,
          lg: "100px",
        }}
        fontSize={{ base: "8px", md: "12px", lg: "15px" }}
        color={"gray"}
        variant={"ghost"}
      >
        Education
      </Button>
    </>
  );
}
