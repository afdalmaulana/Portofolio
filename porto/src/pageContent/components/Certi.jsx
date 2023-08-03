import { Box, Spinner, Stack, Text } from "@chakra-ui/react";

export default function Certi() {
  return (
    <>
      <Box bgColor={"#292e33"} color={"#E9B785"} maxW={"100%"}>
        <Stack>
          <Box mt={{ base: "20px" }} ml={{ base: "30px", lg: "100px" }}>
            <Text
              fontSize={{ base: "32px" }}
              mt={{ base: "50px", md: "50px", lg: "80px" }}
              fontFamily={"bitter"}
            >
              My Certificate
            </Text>
            <Box color={"white"} fontFamily={"montserrat"}>
              <Text>Microsoft Technology Associate</Text>
              <Box
                mt={{ base: "10px", lg: "30px" }}
                bgImage={"certi_mta.png"}
                backgroundPosition={"center"}
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                w={"300px"}
                h={"200px"}
              ></Box>
            </Box>
            <Text fontSize={"24px"}>Under Maintenance, please wait ...</Text>
            <Spinner size="xl" ml={{ base: "30px" }} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
