import { Box, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function Motto() {
  return (
    <>
      <Box
        bgColor={"#292e33"}
        maxW={"100%"}
        h={{ base: "", md: "", lg: "500px" }}
        className="strength"
      >
        <Box>
          <Stack color={"#8e7f6e"}>
            <Text
              ml={{ base: "30px", md: "80px", lg: "100px" }}
              fontSize={{ base: "16px", md: "24px", lg: "32px" }}
              mt={{ base: "30px", md: "40px", lg: "80px" }}
            >
              MY STRENGTH
            </Text>
          </Stack>
          <Flex className="kekuatan" justify={"space-around"}>
            <Box
              w={{ sm: "150px", md: "800px", lg: "600px" }}
              color={"white"}
              ml={{ base: "30px", md: "80px", lg: "100px" }}
              mr={{ base: "30px", md: "80px", lg: "0px" }}
            >
              <Text
                fontSize={{ base: "12px", md: "24px", lg: "40px" }}
                mt={{ sm: "10px", md: "20px", lg: "10px" }}
              >
                Ambition
              </Text>
              <Text
                pt={"10px"}
                align={"justify"}
                fontSize={{ base: "8px", md: "24px", lg: "16px" }}
                mt={{ sm: "10px", md: "40px", lg: "16px" }}
              >
                I am a person who is ready to get out of my comfort zone and is
                not afraid to take risks, and is always ready to take advice. i
                won't give up when facing challenges. Every obstacle is an
                opportunity to grow and learn. When others have doubts, i will
                keep going forward because i know what i want and i am sure i
                can accomplish it.
              </Text>
            </Box>
            <Box
              w={{ sm: "150px", md: "800px", lg: "800px" }}
              ml={{ base: "30px", md: "50px", lg: "20px" }}
              mr={{ base: "30px", md: "80px", lg: "0px" }}
              mt={{ base: "30px", md: "80px", lg: "0px" }}
              color={"white"}
            >
              <Text
                fontSize={{ base: "16px", md: "24px", lg: "40px" }}
                mt={{ sm: "10px", md: "20px", lg: "10px" }}
              >
                Precision
              </Text>
              <Text
                align={"justify"}
                fontSize={{ base: "8px", md: "24px", lg: "16px" }}
                mt={{ base: "5px", md: "40px", lg: "16px" }}
                pt={"10px"}
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
            </Box>
            <Box
              w={{ sm: "150px", md: "800px", lg: "500px" }}
              ml={{ base: "30px", md: "50px", lg: "20px" }}
              mr={{ base: "30px", md: "80px", lg: "100px" }}
              mt={{ base: "30px", md: "80px", lg: "0px" }}
              color={"white"}
            >
              <Text
                fontSize={{ base: "16px", md: "24px", lg: "40px" }}
                mt={{ sm: "10px", md: "20px", lg: "10px" }}
              >
                On Time
              </Text>
              <Text
                align={"justify"}
                fontSize={{ base: "8px", md: "24px", lg: "16px" }}
                mt={{ base: "5px", md: "40px", lg: "16px" }}
                pt={"10px"}
              >
                The discipline in time helped me optimize productivity and
                achieve goals more efficiently. Punctuality is one of the keys
                to success in life. I'm always trying to reach it. I was proud
                to be dependable about punctuality. It helps me build trust with
                others
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
