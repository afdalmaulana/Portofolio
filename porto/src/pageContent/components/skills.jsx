import { Box, Grid, GridItem } from "@chakra-ui/react";

export default function Skills() {
  return (
    <>
      <Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={"20px"}>
            <GridItem w="100%" h="10" bg="blue.500" >
                
            </GridItem>
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
            <GridItem w="100%" h="10" bg="blue.500" />
          </Grid>
      </Box>
    </>
  );
}
