import { Box, Button, Stack, Text } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Box bgColor={"#d8ccbe"} h={"720px"}>
        <Stack>
          <Box mt={'32px'} ml={'100px'} color={'black'}>
            <Text fontSize={"30px"}>
              Hello, I'm
            </Text>
            <Text fontSize={"56px"} fontWeight={'bold'}>
              Muh. Afdal Maulana Said
            </Text>
            <Text fontSize={"40px"}>
                Junior Software Developer
            </Text>
            <Button borderRadius={'4px'} pt={'8px'} pr={'16px'} pb={'8px'}  mt={'20px'} colorScheme={'blackAlpha'}>
                Get in touch
            </Button>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
