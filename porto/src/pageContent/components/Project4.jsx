import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Collapse,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import { Button } from "react-scroll";

export default function Project4() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box>
        <Stack>
          <Fade direction="left" cascade triggerOnce={true}>
            <Card
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
              w={{ lg: "350px" }}
              maxh={{ base: "200px", lg: "480px" }}
              ml={{ base: "0px", lg: "30px" }}
              mt={{ base: "40px", lg: "40px" }}
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
                  backgroundImage={"calcu.png"}
                ></Box>
                <Stack mt="6" spacing="3">
                  <Collapse startingHeight={30} in={show}>
                    <Heading size="md">Simple Calculator</Heading>
                    This project is an example of simple calculator
                  </Collapse>
                  <Button
                    w={"10px"}
                    ml={"5px"}
                    size="sm"
                    onClick={handleToggle}
                    mt="1rem"
                    bgColor={""}
                    variant={""}
                  >
                    {show ? "Less" : "More"}
                  </Button>
                </Stack>
              </CardBody>
              <CardFooter>
                <Link to={"calculator"} target="_blank">
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
          </Fade>
        </Stack>
      </Box>
    </>
  );
}
