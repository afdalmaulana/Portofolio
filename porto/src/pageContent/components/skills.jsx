import {
  Box,
  Card,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

export default function Skills() {
  return (
    <>
      <Box
        className="myskill"
        maxW={"100%"}
        // w={{ base: "350px", md: "650px", lg: "850px", xl: "1230px" }}
        // h={{ base: "20px", md: "50px", lg: "80px", xl: "150px" }}
      >
        <Box
          mr={{ base: 10, md: 100, lg: 100 }}
          w={{ sm: "100px", lg: "1240px" }}
          ml={{ base: "30px", lg: "100px" }}
        >
          <Flex
            mt={{ base: "20px" }}
            justify={"space-around"}
            wrap={"wrap"}
            gap={2}
            className="myskill"
          >
            <Fade cascade={true} triggerOnce={true}>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"html.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>HTML</Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"css.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>CSS</Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"js.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>
                    Javascript
                  </Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"react.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>ReactJs</Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"node.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>NodeJs</Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
              <Card
                _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
                bgColor={"whiteAlpha.800"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"github.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <Box
                  bgGradient={
                    "linear(180deg, #5d6366 0, #415460 25%, #1f4459 50%, #003553 75%, #00264d 100%)"
                  }
                  borderBottomRadius={"10px"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "60px", lg: "100px" }}
                  pos={"absolute"}
                  mt={{ base: "105px", lg: "150px" }}
                  // opacity={0.}
                ></Box>
                <Box
                  fontFamily={"montserrat"}
                  zIndex={2}
                  mt={{ base: "25px", md: "15px", lg: "5px" }}
                  ml={{ base: "5px", lg: "5px" }}
                  color={"white"}
                  textAlign={"center"}
                >
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Github</Text>
                  <Text fontSize={{ base: "12px", lg: "24px" }}>Beginner</Text>
                </Box>
              </Card>
            </Fade>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
