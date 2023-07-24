import { Box, Spinner, Stack, Text } from "@chakra-ui/react";

export default function Certi() {
  return (
    <>
      <Box>
        <Stack>
          <Box mt={{ base: "20px" }} ml={{ base: "30px" }}>
            <Text fontSize={"24px"}>My certificate</Text>
            <Text fontSize={"24px"}>Under Maintenance, please wait ...</Text>
            <Spinner size="xl" ml={{ base: "30px" }} />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
