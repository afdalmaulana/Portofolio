import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";
import Project from "./Project";
import Project2 from "./Project2";
import Project3 from "./Project3";
import { Fade } from "react-awesome-reveal";
import Project5 from "./Project5";
import Project4 from "./Project4";
import { Link, useNavigate } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import Project6 from "./Project6";

import { motion } from "framer-motion";
import AnimateTransaction from "../../components/AnimateTransaction";

function AllProject() {
  const navigate = useNavigate();
  const toProject = () => {
    navigate("/https://github.com/afdalmaulana?tab=repositories");
  };
  return (
    <>
      <Box
        // bgColor={"#FFFBF5"}
        bgColor={"#073b4c"}
        px={"20px"}
        py={{ sm: "80px", lg: "0px" }}
      >
        <Box
          px={{ base: "30px", sm: "30px", lg: "100px" }}
          py={{ base: "20px", sm: "20px", lg: "100px" }}
        >
          <Text
            color={"white"}
            fontSize={{ sm: "24px", md: "48px", lg: "64px" }}
            mt={"24px"}
            fontFamily={"bitter"}
            id="project"
          >
            My Project
          </Text>
          {/* <HeroBanner /> */}
          <Flex
            mt={"20px"}
            justifyContent={"space-around"}
            wrap={"wrap"}
            w={"100%"}
            gap={"10px"}
          >
            <Box maxW={{ lg: "550px" }}>
              <Project />
            </Box>
            <Box maxW={{ lg: "550px" }}>
              <Project2 />
            </Box>
            <Box maxW={{ lg: "550px" }}>
              <Project5 />
            </Box>
            <Box maxW={{ lg: "550px" }}>
              <Project4 />
            </Box>
            <Box maxW={{ lg: "550px" }}>
              <Project3 />
            </Box>
            <Box maxW={{ lg: "550px" }}>
              <Project6 />
            </Box>
          </Flex>
          <Box color={"black"} position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bgColor={"#FFFBF5"} px="4">
              <Link
                to="https://github.com/afdalmaulana?tab=repositories"
                target="_blank"
              >
                <Button
                  bgColor={"#FFFBF5"}
                  variant={""}
                  // onClick={() => toProject()}
                >
                  View All Project On Github
                </Button>
              </Link>
            </AbsoluteCenter>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AnimateTransaction(AllProject);
