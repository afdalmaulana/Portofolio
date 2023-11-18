import { Box, Flex, Image, Spinner, Stack, Text } from "@chakra-ui/react";

export default function Certi() {
  return (
    <>
      <Box bgColor={"#292e33"} id="certif" color={"#E9B785"} maxW={"100%"}>
        <Box px={{ base: "30px", sm: "30px", lg: "100px" }}>
          <Text fontSize={{ base: "36px" }} fontFamily={"bitter"}>
            My Certificate
          </Text>
          <Flex
            color={"white"}
            wrap={"wrap"}
            fontFamily={"montserrat"}
            justifyContent={"center"}
            gap={"20px"}
          >
            {/* <Text>Microsoft Technology Associate</Text> */}
            <Image src="certi_mta.png" h={"240px"} />
            <Image src="certi2.png" h={"240px"} />
            {/* <Box
              mt={{ base: "10px", lg: "20px" }}
              bgImage={"certi_mta.png"}
              backgroundPosition={"center"}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              w={"300px"}
              h={"200px"}
            ></Box>
            <Box
              mt={{ base: "10px", lg: "20px" }}
              bgImage={"certi2.png"}
              backgroundPosition={"center"}
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              w={"300px"}
              h={"200px"}
            ></Box> */}
          </Flex>
          <Text fontSize={"24px"}>Under Maintenance, please wait ...</Text>
          <Spinner size="xl" ml={{ base: "30px" }} />
        </Box>
      </Box>
    </>
  );
}
