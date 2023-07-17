import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <>
      <Box bgColor={"#d8ccbe"} h={"600px"}>
        <Stack ml={"100px"}>
          <Text id="about" color={"#60574c"} fontSize={"32px"} mt={"64px"}>
            A bit about me
          </Text>
          <Text color={"black"} fontSize={"64"}>
            Who am I ?
          </Text>
          <Box w={"1200px"}>
            <Text align={"justify"}>
              Graduated from the Indonesian Muslim University Makassar majoring
              in Informatics Engineering with a Bachelor of Computer (S.Kom)
              degree and Microsoft Technology Associate (MTA) with a GPA of 3.51
              / 4.00. Born in Belawa, Wajo, on July 26, 1998. Active and
              involved in several organizational activities on campus and
              outside campus. I am a punctual person, persuasive in
              communicating, objective in assessing things, besides that I also
              think critically, creatively and dynamically. I can work under
              pressure and easily recognize new environments, can also work with
              a team or individually. I like to learn something new and still
              want to keep learning
            </Text>
          </Box>
          <Grid templateColumns="repeat(4, 1fr)" mt={"20px"} gap={1}>
            <GridItem w={'200px'} h={'200px'} bg={'gray'}></GridItem>
            <GridItem w={'200px'} h={'200px'} bg={'gray'}></GridItem>
            <GridItem w={'200px'} h={'200px'} bg={'gray'}></GridItem>
            <GridItem w={'200px'} h={'200px'} bg={'gray'}></GridItem>
            {/* <GridItem w="250px" h="200" bg="blue.500"></GridItem>
            <GridItem w="250px" h="200" bg="blue.500"></GridItem>
            <GridItem w="250px" h="200" bg="blue.500"></GridItem> */}
          </Grid>
        </Stack>
      </Box>
    </>
  );
}
