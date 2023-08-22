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
              fontFamily={"montserrat"}
              _hover={{ transform: "scale(1.1)", cursor: "pointer" }}
              w={{ md: "320px", lg: "350px" }}
              maxh={{ base: "200px", md: "200px", lg: "480px" }}
              ml={{ base: "0px", md: "50px", lg: "80px" }}
              mt={{ base: "20px", lg: "40px" }}
              bgColor={"white"}
              borderRadius={"20px"}
            >
              <CardBody>
                <Box
                  height={{ base: "100px", md: "150px", lg: "200px" }}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  borderRadius="lg"
                  backgroundImage={"Goldenbook.png"}
                ></Box>
                <Stack mt="6" spacing="3">
                  <Collapse startingHeight={20} in={show}>
                    <Heading size={{ base: "sm", lg: "md" }}>
                      Golden Book
                    </Heading>
                    <Text
                      align={"justify"}
                      fontSize={{ base: "8px", lg: "12px" }}
                    >
                      This project is an example of a website for reading
                      articles or blogs. The reading of the articles contained
                      in this website is data originating from the Purwadhika
                      Backend. Feature in this project is carousel banner,
                      pagination, like button, bookmarks, register, login,
                      change profile (username, email, password, profile
                      picture, forget and reset password user), create blog,
                      sort blog
                    </Text>
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
