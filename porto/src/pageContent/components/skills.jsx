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
          bgColor={"red"}
          w={{ base: "200px", lg: "1240px" }}
          ml={{ base: "30px", lg: "100px" }}
        >
          <Flex justify={"space-around"} wrap={"wrap"} className="myskill">
            <Card
              w={{ base: "80px", lg: "150px" }}
              h={{ lg: "250px" }}
              borderRadius={"20px"}
            >
              <Box
                mt={"10px"}
                bgImage={"html.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={{ base: "80px", lg: "150px" }}
                h={{ base: "80px", lg: "150px" }}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"} ml={{ lg: "10px" }}>
                  <Text fontSize={{ base: "8px", lg: "24px" }}>HTML</Text>
                  <Text fontSize={{ base: "8px", lg: "24px" }}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card>
            {/* <Card maxW={"500px"} maxH={"250px"} borderRadius={"20px"}>
              <Box
                mt={"10px"}
                bgImage={"css.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={"150px"}
                h={"150px"}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"} ml={"10px"}>
                  <Text fontSize={"24px"}>CSS</Text>
                  <Text fontSize={"24px"}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card> */}
            {/* <Card maxW={"500px"} maxH={"250px"} borderRadius={"20px"}>
              <Box
                mt={"10px"}
                bgImage={"js.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={"150px"}
                h={"150px"}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"}>
                  <Text fontSize={"24px"}>Javascript</Text>
                  <Text fontSize={"24px"}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card> */}
            {/* <Card maxW={"500px"} maxH={"250px"} borderRadius={"20px"}>
              <Box
                mt={"10px"}
                bgImage={"react.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={"150px"}
                h={"150px"}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"} ml={"10px"}>
                  <Text fontSize={"24px"}>ReactJs</Text>
                  <Text fontSize={"24px"}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card> */}
            {/* <Card maxW={"500px"} maxH={"250px"} borderRadius={"20px"}>
              <Box
                mt={"10px"}
                ml={"10px"}
                bgImage={"node.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={"120px"}
                h={"120px"}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"} ml={"10px"}>
                  <Text fontSize={"24px"}>HTML</Text>
                  <Text fontSize={"24px"}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card> */}
            {/* <Card maxW={"500px"} maxH={"250px"} borderRadius={"20px"}>
              <Box
                mt={"10px"}
                bgImage={"github.png"}
                bgPos={"center"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                w={"150px"}
                h={"150px"}
              ></Box>
              <CardFooter textAlign={"center"}>
                <Box textAlign={"center"} ml={"10px"}>
                  <Text fontSize={"24px"}>Github</Text>
                  <Text fontSize={"24px"}>Beginner</Text>
                </Box>
              </CardFooter>
            </Card> */}
          </Flex>
        </Box>
      </Box>
    </>
  );
}
