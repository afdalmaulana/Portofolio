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
            justify={"space-around"}
            wrap={"wrap"}
            gap={5}
            className="myskill"
          >
            <Fade cascade={true} triggerOnce={true}>
              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
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
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "10px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>HTML</Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>

              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
              >
                <Box
                  mt={"10px"}
                  bgImage={"CSS.png"}
                  bgPos={"center"}
                  bgSize={"cover"}
                  bgRepeat={"no-repeat"}
                  w={{ base: "100px", lg: "150px" }}
                  h={{ base: "80px", lg: "150px" }}
                ></Box>
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "10px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>CSS</Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
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
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "5px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Javascript
                    </Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
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
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "10px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>ReactJs</Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
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
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "10px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>NodeJs</Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
              <Card
                w={{ base: "100px", lg: "150px" }}
                h={{ base: "165px", lg: "250px" }}
                borderRadius={"10px"}
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
                <CardFooter
                  bgColor={"yellow"}
                  borderRadius={"10px"}
                  opacity={10}
                  textAlign={"center"}
                >
                  <Box ml={{ base: "5px", lg: "10px" }}>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>Github</Text>
                    <Text fontSize={{ base: "12px", lg: "24px" }}>
                      Beginner
                    </Text>
                  </Box>
                </CardFooter>
              </Card>
            </Fade>
          </Flex>
        </Box>
      </Box>
    </>
  );
}
