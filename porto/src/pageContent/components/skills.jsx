import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Skills() {
  return (
    <>
      <Box
        w={{ base: "350px", md: "650px", lg: "850px", xl: "1230px" }}
        h={{ base: "20px", md: "50px", lg: "80px", xl: "150px" }}
      >
        <Flex justifyContent={"space-around"}>
          <figure>
            <Image
              src="html.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                ml={{ base: "0px", md: "6px", lg: "15px" }}
                color={"whiteAlpha.800"}
              >
                HTML
              </Text>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="css.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                ml={{ base: "0px", md: "6px", lg: "15px" }}
                color={"whiteAlpha.800"}
              >
                CSS
              </Text>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="js.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                color={"whiteAlpha.800"}
              >
                Javascript
              </Text>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="react.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                color={"whiteAlpha.800"}
              >
                React.Js
              </Text>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="node.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                color={"whiteAlpha.800"}
              >
                node.Js
              </Text>
            </figcaption>
          </figure>
          <figure>
            <Image
              src="github.png"
              alt="html-5--v1"
              w={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
              h={{ base: "20px", md: "40px", lg: "80px", xl: "100px" }}
            ></Image>
            <figcaption>
              <Text
                fontSize={{ base: "0px", md: "12px", lg: "20px" }}
                color={"whiteAlpha.800"}
              >
                Github
              </Text>
            </figcaption>
          </figure>
        </Flex>
      </Box>
    </>
  );
}
