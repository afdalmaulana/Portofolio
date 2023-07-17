import { Button } from "@chakra-ui/react";

export default function Education() {
  return (
    <>
      <Button
        mt={"10px"}
        mr={"10px"}
        colorScheme="white"
        w={{ base: "25px", md: "75px", lg: "100px" }}
        fontSize={{ base: "8px", md: "12px", lg: "15px" }}
        color={"gray"}
      >
        Education
      </Button>
    </>
  );
}
