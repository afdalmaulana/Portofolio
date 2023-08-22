import { Box, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function Motto() {
  return (
    <>
      <Box
        bgColor={"#292e33"}
        maxW={"100%"}
        h={{ base: "", md: "600px", lg: "600px" }}
        className="strength"
      >
        <Box>
          <Stack color={"#E9B785"}>
            <Text
              ml={{ base: "30px", md: "40px", lg: "100px" }}
              fontSize={{ base: "16px", md: "24px", lg: "40px" }}
              mt={{ base: "30px", md: "40px", lg: "80px" }}
              fontFamily={"bitter"}
            >
              My Strength
            </Text>
          </Stack>
          <Flex className="kekuatan" justify={"space-around"}>
            <Box
              w={{ sm: "150px", md: "900px", lg: "550px" }}
              color={"white"}
              ml={{ base: "30px", md: "40px", lg: "100px" }}
              mr={{ base: "30px", md: "80px", lg: "60px" }}
            >
              <Text
                fontSize={{ base: "12px", md: "24px", lg: "40px" }}
                mt={{ sm: "20px", md: "20px", lg: "25px" }}
                fontFamily={"montserrat"}
              >
                Ambition
              </Text>
              <Text
                // pt={"10px"}
                align={"justify"}
                fontSize={{ base: "8px", md: "16px", lg: "14px" }}
                mt={{ sm: "0px", md: "10px", lg: "16px" }}
                fontFamily={"montserrat"}
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
              w={{ sm: "150px", md: "900px", lg: "550px" }}
              ml={{ base: "30px", md: "40px", lg: "-24px" }}
              mr={{ base: "30px", md: "80px", lg: "0px" }}
              mt={{ base: "10px", md: "20px", lg: "0px" }}
              color={"white"}
            >
              <Text
                fontSize={{ base: "12px", md: "24px", lg: "40px" }}
                mt={{ base: "10px", sm: "0px", md: "0px", lg: "25px" }}
                fontFamily={"montserrat"}
              >
                Precision
              </Text>
              <Text
                // pt={"10px"}
                align={"justify"}
                fontSize={{ base: "8px", md: "16px", lg: "14px" }}
                mt={{ sm: "10px", md: "10px", lg: "16px" }}
                fontFamily={"montserrat"}
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
              w={{ sm: "150px", md: "900px", lg: "550px" }}
              ml={{ base: "30px", md: "40px", lg: "30px" }}
              mr={{ base: "30px", md: "80px", lg: "20px" }}
              mt={{ base: "10px", md: "20px", lg: "0px" }}
              color={"white"}
            >
              <Text
                fontSize={{ base: "12px", md: "24px", lg: "40px" }}
                mt={{ base: "10px", sm: "0px", md: "0px", lg: "25px" }}
                fontFamily={"montserrat"}
              >
                On Time
              </Text>
              <Text
                // pt={"10px"}
                align={"justify"}
                fontSize={{ base: "8px", md: "16px", lg: "14px" }}
                mt={{ sm: "0px", md: "10px", lg: "16px" }}
                mr={{ sm: "", lg: "40px" }}
                fontFamily={"montserrat"}
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
