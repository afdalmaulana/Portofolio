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

export default function Project() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Box>
        <Stack>
          <Fade cascade={true} triggerOnce={true}>
            <Card
              w={"350px"}
              maxh={"480px"}
              ml={"100px"}
              mt={"40px"}
              bgColor={"white"}
              borderRadius={"20px"}
            >
              <CardBody>
                <Box
                  height={{ sm: "100px", md: "150px", lg: "200px" }}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  borderRadius="lg"
                  backgroundImage={"Goldenbook.png"}
                ></Box>
                <Stack mt="6" spacing="3">
                  <Collapse startingHeight={30} in={show}>
                    <Heading size="md">Golden Book</Heading>
                    This project is an example of a website for reading articles
                    or blogs. The reading of the articles contained in this
                    website is data originating from the Purwadhika Backend
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
                <Link
                  to={"https://miniproject--goldenbook.netlify.app/"}
                  target="_blank"
                >
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
