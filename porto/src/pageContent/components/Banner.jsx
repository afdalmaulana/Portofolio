import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <Box bgColor={"#d8ccbe"} h={"720px"}>
        <Stack mt={"60px"}>
          <Box mt={"100px"} ml={"100px"} color={"black"}>
            <Text fontSize={"30px"}>Hello, I'm</Text>
            <Text fontSize={"56px"} fontWeight={"bold"}>
              Muh. Afdal Maulana Said
            </Text>
            <Text fontSize={"40px"}>Junior Software Developer</Text>
            <Button
              borderRadius={"4px"}
              pt={"8px"}
              pr={"16px"}
              pb={"8px"}
              mt={"20px"}
              colorScheme={"blackAlpha"}
            >
              Get in touch
            </Button>
            <Text fontSize={"32px"} mt={"20px"}>
              Follow me on :
            </Text>
            <section>
              <Flex>
                <Link to={"https://github.com/afdalmaulana"} target="_blank">
                  <Image src="github.png"></Image>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/muhafdalmaulanasaid/"}
                  target="_blank"
                >
                  <Image ml={"10px"} src="linked.png"></Image>
                </Link>
                <Link
                  to={"https://www.instagram.com/afdalmaulanaaa/"}
                  target="_blank"
                >
                  <Image ml={"10px"} src="instagram.png"></Image>
                </Link>
              </Flex>
            </section>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
