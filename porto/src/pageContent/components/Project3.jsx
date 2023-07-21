import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// import { Button } from "react-scroll";

export default function Project3() {
  return (
    <>
      <Box>
        <Stack>
          <Card
            w={"350px"}
            h={"445px"}
            ml={"32px"}
            mt={"40px"}
            bgColor={"white"}
            borderRadius={"20px"}
          >
            <CardBody>
              <Box
                height={"200px"}
                position="relative"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                backgroundSize="cover"
                borderRadius="lg"
                backgroundImage={"timer.png"}
              ></Box>
              {/* <Image src="Goldenbook.png" w={"200px"} h={"100px"}></Image> */}
              <Stack mt="6" spacing="3">
                <Heading size="lg">Stopwatch</Heading>
                <Text align={"justify"} color={"black"} fontSize={"12px"}>
                  This project is a making stopwatch
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Link to={"/timer"} target="_blank">
                <Button
                  bgColor={"#d8ccbe"}
                  variant={"ghost"}
                  borderRadius={"10px"}
                >
                  View Project
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </Stack>
      </Box>
    </>
  );
}
