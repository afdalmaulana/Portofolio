import {
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import AboutMe from "../../navbar/components/buttonAboutMe";

export default function WorkExperience() {
  return (
    <>
      <Box
        // bgColor={"#04293A"}
        // bgColor={"#292e33"}
        // bgColor={"#073b4c"}
        bgColor={"#292E33"}
        px={{ base: "30px", sm: "30px", lg: "100px" }}
        py={{ base: "20px", sm: "20px", lg: "80px" }}
        // h={{ base: "1200px", md: "500px", lg: "1800px" }}
        fontFamily={"montserrat"}
        id="experience"
      >
        <Stack w={"100%"}>
          <Box>
            <Text
              // mt={{ base: "20px", sm: "200px", md: "250px", lg: "1020px" }}
              fontSize={{ base: "24px", sm: "24px", md: "24px", lg: "36px" }}
              color={"#E9B785"}
              fontFamily={"bitter"}
              fontWeight={"lg"}
            >
              WORK EXPERIENCE
            </Text>
            <Flex
              justifyContent={"space-between"}
              className="myexpe"
              flexDirection={{ sm: "column", lg: "row" }}
              // id="experience"
            >
              <Fade direction="down" cascade={true} triggerOnce={true}>
                <Box>
                  <Text
                    color={"#E9B785"}
                    fontSize={{ base: "16px", lg: "24px" }}
                    mt={{ base: "40px", md: "50px", lg: "80px" }}
                    fontFamily={"bitter"}
                  >
                    Internship
                  </Text>
                  <Stack>
                    <Text
                      mt={{ base: "20px", md: "30px", lg: "40px" }}
                      fontSize={{ base: "16px", lg: "30px" }}
                      color={"white"}
                      fontWeight={"bold"}
                    >
                      PT. PELABUHAN INDONESIA IV (Persero) TERMINAL PETIKEMAS
                      MAKASSAR
                    </Text>
                    <Text
                      fontSize={{ base: "12px", lg: "16px" }}
                      mt={"5px"}
                      color={"white"}
                    >
                      Sep 2016 - Feb 2017 | Assistant IT Support
                    </Text>
                    <UnorderedList
                      color={"white"}
                      ml={"20px"}
                      pt={"10px"}
                      fontSize={{ base: "12px", lg: "16px" }}
                    >
                      <ListItem>
                        Assist IT seniors working on maintenance and checking on
                        customer service’s computer
                      </ListItem>
                      <ListItem mt={"10px"}>Do administrative tasks</ListItem>
                      <ListItem mt={"10px"}>
                        Assist staff with employee data
                      </ListItem>
                    </UnorderedList>
                    <Text
                      mt={"40px"}
                      fontSize={{ base: "16px", lg: "32px" }}
                      fontWeight={"bold"}
                      color={"white"}
                    >
                      SOUTH SULAWESI GOVERNOR’S OFFICE
                    </Text>
                    <Text fontSize={"16px"} mt={"5px"} color={"white"}>
                      Dec 2020 - May 2021 | Assistant Staff
                    </Text>
                    <UnorderedList
                      color={"white"}
                      ml={"20px"}
                      fontSize={{ base: "12", lg: "16px" }}
                    >
                      <ListItem>
                        Assist staff in preparing employee reports
                      </ListItem>
                      <ListItem mt={"10px"}>Do administrative tasks</ListItem>
                    </UnorderedList>
                  </Stack>
                </Box>
                <Box mr={"50px"}>
                  <Text
                    color={"#E9B785"}
                    fontSize={{ base: "16px", lg: "24px" }}
                    mt={{ base: "40px", md: "50px", lg: "90px" }}
                    fontFamily={"bitter"}
                  >
                    Part-time
                  </Text>
                  <Text
                    fontSize={{ base: "16px", lg: "32px" }}
                    fontWeight={"bold"}
                    mt={"40px"}
                    color={"white"}
                  >
                    CV. Sakti Mandiri
                  </Text>
                  <Text
                    fontSize={{ base: "12px", lg: "16px" }}
                    mt={"20px"}
                    color={"white"}
                  >
                    May, 2023 - August 2023
                  </Text>
                  <UnorderedList
                    color={"white"}
                    ml={"20px"}
                    pt={"10px"}
                    fontSize={{ base: "12", lg: "16px" }}
                  >
                    <ListItem>
                      Responsible to make form to offer price for items and
                      services
                    </ListItem>
                    <ListItem mt={"10px"}>
                      Analysis of previous item’s price with the latest item’s
                      price
                    </ListItem>
                    <ListItem mt={"10px"}>
                      Make reports of incoming and outgoing items in accordance
                      with the agreement when binding on price
                    </ListItem>
                    <ListItem mt={"10px"}>
                      Responsible to create transaction reports and create
                      invoices
                    </ListItem>
                  </UnorderedList>
                </Box>
              </Fade>
            </Flex>
          </Box>
        </Stack>
        
      </Box>
    </>
  );
}
