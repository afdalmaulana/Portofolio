import { Box, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function Motto() {
  return (
    <>
      <Box bgColor={"#292e33"} h={"400px"}>
        <Box>
          <Stack color={"#8e7f6e"}>
            <Text ml={"100px"} fontSize={"32px"} mt={"80px"}>
              My Strength
            </Text>
          </Stack>
          <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={"20px"}>
            <GridItem
              w="400px"
              h="10"
              ml={"100px"}
              fontSize={"32px"}
              color={"white"}
            >
              Ambition
              <Text fontSize={"16px"} mt={"24px"} color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptas doloremque eligendi. Quidem, neque sequi
                saepe illo, architecto tenetur aspernatur voluptatem magnam sit
                nostrum magni obcaecati nesciunt excepturi enim esse.
              </Text>
            </GridItem>
            <GridItem
              w="400px"
              h="10"
              fontSize={"32px"}
              color={"white"}
            >
              Precision
              <Text fontSize={"16px"} mt={"24px"} color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptas doloremque eligendi. Quidem, neque sequi
                saepe illo, architecto tenetur aspernatur voluptatem magnam sit
                nostrum magni obcaecati nesciunt excepturi enim esse.
              </Text>
            </GridItem>
            <GridItem
              w="400px"
              h="10"
              mr={"100px"}
              fontSize={"32px"}
              color={"white"}
            >
              On Time
              <Text fontSize={"16px"} mt={"24px"} color={"white"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam voluptas doloremque eligendi. Quidem, neque sequi
                saepe illo, architecto tenetur aspernatur voluptatem magnam sit
                nostrum magni obcaecati nesciunt excepturi enim esse.
              </Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
