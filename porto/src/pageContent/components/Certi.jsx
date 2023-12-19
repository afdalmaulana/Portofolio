import { Box, Flex, Image, Spinner, Stack, Text } from "@chakra-ui/react";
import ButtonAboutMe from "../../navbar/components/buttonAboutMe";

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
            <Image src="certi_mta.png" w={"300px"} h={"240px"} />
            <Image src="certi2.png" w={"300px"} h={"240px"} />
          </Flex>
          <Text fontSize={"24px"} mt={"20px"}>
            Under Maintenance, please wait ...
          </Text>
          <Spinner size="xl" ml={{ base: "30px" }} />
          <Box
            position={{ base: "static", sm: "absolute" }}
            right={{ base: "0px", sm: "10px", lg: "200px" }}
            bottom={{ base: "20px", sm: "20px", lg: "100px" }}
            // style={{
            //   position: "absolute",
            //   right: 0,
            //   bottom: 0,
            //   backgroundColor: "red",
            // }}
          >
            <ButtonAboutMe />
          </Box>
        </Box>
      </Box>
    </>
  );
}
