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

export default function Project4() {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const [lcdIsSmall] = useMediaQuery(`(max-width : 768px)`);
  const [muncul, setMuncul] = useState(false);

  return (
    <>
      <Fade cascade={true} triggerOnce={true}>
        <Box
          onMouseEnter={() => setMuncul(true)}
          onMouseLeave={() => setMuncul(false)}
          overflow="hidden"
          variant="outline"
        >
          <Link to={"/calculator"} target="_blank">
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
                      <Text fontSize={"15px"}>
                        This project is fundamental javascript making a simple
                        calculator
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
                    Simple Calculator
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
                    src="calcu.png"
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
    </>
  );
}
