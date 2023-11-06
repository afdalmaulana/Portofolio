import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Collapse,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
// import { Button } from "react-scroll";

export default function Project2() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [muncul, setMuncul] = useState(false);

  return (
    <>
      <Fade cascade={true} triggerOnce={true}>
        <Box
          onMouseEnter={() => setMuncul(true)}
          onMouseLeave={() => setMuncul(false)}
          // maxW={{ lg: "30%" }}
          overflow="hidden"
          variant="outline"
        >
          <Link
            to={"https://github.com/afdalmaulana/AbsenceEmployee"}
            target="_blank"
          >
            <Box boxShadow={"lg"}>
              <Box>
                <Box
                  bgColor="black"
                  position="relative"
                  w="100%"
                  h="100%"
                  fontFamily={"montserrat"}
                >
                  <Box
                    position="absolute"
                    px={"2"}
                    py={"4"}
                    align="justify"
                    color={"white"}
                    alignItems="center"
                    justifyContent="center"
                    zIndex="1"
                    opacity={muncul ? 1 : 0}
                    transition="opacity 0.3s ease-in-out"
                  >
                    <Stack>
                      <Text fontSize={"12px"}>
                        This project is making absense for employee that can
                        clock in and clock out for work. Admin can set amount of
                        employee for month, if employee clock in but not clock
                        out, the employee have deduction 1/2 from amount.
                      </Text>
                      <Text>Framework : React.Js</Text>
                      <Text>Chakra UI</Text>
                    </Stack>
                  </Box>
                  <Text
                    color={"white"}
                    zIndex={1000}
                    position="absolute"
                    bottom={"0"}
                    px={"20px"}
                    py={"10px"}
                    fontSize={"3xl"}
                    opacity={muncul ? 0 : 1}
                    transition="opacity 0.3s ease-in-out"
                    fontWeight={"bold"}
                  >
                    Attendence Employee
                  </Text>
                  <Box
                    bgGradient="linear(to-t, blackAlpha.800, whiteAlpha.100)"
                    w="100%"
                    h="30%"
                    fontFamily={"montserrat"}
                    position="absolute"
                    bottom={0}
                    opacity={muncul ? 0 : 1} // Use 1 for full opacity
                    zIndex={1}
                  ></Box>
                  <Image
                    transition="opacity 0.3s ease-in-out"
                    opacity={muncul ? "0.2" : 1}
                    bgColor={"black"}
                    src="absense.png"
                    w="100%"
                    h="100%"
                    zIndex="0"
                  />
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Fade>
      {/* <Box mt={"32px"}>
        <Stack>
          <Fade cascade={true} triggerOnce={true}>
            <Card
              maxW={"1240px"}
              overflow="hidden"
              variant="outline"
              borderRadius={"20px"}
            >
              <Flex className="pro">
                <CardBody>
                  <Heading size="md">Attendence Employee</Heading>
                  <Stack mt="6" spacing="3">
                    <Collapse startingHeight={20} in={show}>
                      <Text
                        align={"justify"}
                        fontSize={{ base: "8px", lg: "12px" }}
                      >
                        This project is making absense for employee that can
                        clock in and clock out for work. Admin can set amount of
                        employee for month, if employee clock in but not clock
                        out, the employee have deduction 1/2 from amount
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
                    <Divider />
                    <Text>Framework : React.Js</Text>
                    <Text>Component style : Chakra UI</Text>
                  </Stack>
                </CardBody>
                <Box
                  maxH={{ base: "100px", md: "150px", lg: "450px" }}
                  minH={{ base: "100px", md: "400px", lg: "320px" }}
                  w={{ md: "800px", lg: "600px" }}
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  borderRadius="lg"
                  backgroundImage={"absense.png"}
                ></Box>
              </Flex>
            </Card>
          </Fade>
        </Stack>
      </Box> */}
    </>
  );
}
