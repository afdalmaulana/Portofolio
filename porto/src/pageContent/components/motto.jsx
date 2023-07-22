import { Box, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function Motto() {
  return (
    <>
      <Box bgColor={"#292e33"} h={"500px"}>
        <Box>
          <Stack color={"#8e7f6e"}>
            {/* <Stack color={"white"}> */}
            <Text
              ml={{ sm: "50px", md: "80px", lg: "100px" }}
              fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
              mt={"80px"}
            >
              MY STRENGTH
            </Text>
          </Stack>
          <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={"20px"}>
            <GridItem
              w={{ sm: "100px", md: "200px", lg: "400px" }}
              h="10"
              ml={{ sm: "50px", md: "80px", lg: "100px" }}
              fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
              color={"white"}
            >
              Ambition
              <Text
                fontSize={{ sm: "8px", md: "10px", lg: "14px" }}
                mt={"24px"}
                color={"white"}
                align={"justify"}
              >
                I am a person who is ready to get out of my comfort zone and is
                not afraid to take risks, and is always ready to take advice. i
                won't give up when facing challenges. Every obstacle is an
                opportunity to grow and learn. When others have doubts, i will
                keep going forward because i know what i want and i am sure i
                can accomplish it.
              </Text>
            </GridItem>
            <GridItem
              w={{ sm: "100px", md: "200px", lg: "400px" }}
              h="10"
              fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
              color={"white"}
            >
              Precision
              <Text
                fontSize={{ sm: "8px", md: "10px", lg: "14px" }}
                mt={"24px"}
                color={"white"}
                align={"justify"}
              >
                I have always tried to perform every task with precision and
                precision, because quality is the key to extraordinary results.
                I don't like to jump to conclusions. I prefer to investigate
                with precision before making a decision. Precision was the first
                principle in my work. I make sure every data and information I
                use is precise and accurate. In communication, I have always
                tried to convey information clearly and correctly, so that there
                is no confusion or misunderstanding
              </Text>
            </GridItem>
            <GridItem
              w={{ sm: "100px", md: "200px", lg: "400px" }}
              h="10"
              mr={"100px"}
              fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
              color={"white"}
            >
              On Time
              <Text
                fontSize={{ sm: "8px", md: "10px", lg: "16px" }}
                mt={"24px"}
                color={"white"}
              >
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
