import {
  Box,
  Flex,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

export default function WorkExperience() {
  return (
    <>
      <Box
        bgColor={"#073b4c"}
        id="experience"
        h={{ sm: "350px", md: "500px", lg: "1000px" }}
      >
        <Stack ml={{ sm: "50px", md: "80px", lg: "100px" }}>
          <Text
            mt={"300px"}
            fontSize={{ sm: "16px", md: "24px", lg: "32px" }}
            color={"#CBB279"}
          >
            EXPERIENCE
          </Text>
          <Flex justifyContent={"space-between"}>
            <Fade direction="down" cascade={true} triggerOnce={true}>
              <Box>
                <Text color={"#8e7f6e"} fontSize={"24px"} mt={"50px"}>
                  Internship
                </Text>
                <Stack>
                  <Text mt={"40px"} fontSize={"24px"} color={"white"}>
                    PT. PELABUHAN INDONESIA IV (Persero) TERMINAL PETIKEMAS
                    MAKASSAR
                  </Text>
                  <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                    Sep 2016 - Feb 2017 | Assistant IT Support
                  </Text>
                  <UnorderedList color={"white"} ml={"20px"} pt={"10px"}>
                    <ListItem>
                      Assist IT seniors working on maintenance and checking on
                      customer service’s computer
                    </ListItem>
                    <ListItem>Do administrative tasks</ListItem>
                    <ListItem>Assist staff with employee data</ListItem>
                  </UnorderedList>
                  <Text mt={"40px"} fontSize={"32px"} color={"white"}>
                    SOUTH SULAWESI GOVERNOR’S OFFICE
                  </Text>
                  <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                    Dec 2020 - May 2021 | Assistant Staff
                  </Text>
                  <UnorderedList color={"white"} ml={"20px"}>
                    <ListItem>
                      Assist staff in preparing employee reports
                    </ListItem>
                    <ListItem>Do administrative tasks</ListItem>
                  </UnorderedList>
                </Stack>
              </Box>
              <Box mr={"50px"}>
                <Text color={"#8e7f6e"} fontSize={"24px"} mt={"50px"}>
                  Part-time
                </Text>
                <Text fontSize={"32px"} mt={"40px"} color={"white"}>
                  CV. Sakti Mandiri
                </Text>
                <Text fontSize={"16px"} mt={"20px"} color={"white"}>
                  May, 2023 - August 2023
                </Text>
                <UnorderedList color={"white"} ml={"20px"} pt={"10px"}>
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
        </Stack>
      </Box>
    </>
  );
}
