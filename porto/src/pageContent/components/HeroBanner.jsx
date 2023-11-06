import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function HeroBanner() {
  return (
    <Box
      py={{ base: "28px", md: "40px", lg: "60px" }}
      px={{ base: "28px", md: "48px", lg: "100px" }}
    >
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={false}
        showStatus={false}
      >
        <Box w="100%" h="800" borderRadius={"20px"}>
          <Image
            borderRadius={"20px"}
            src={"grocher.png"}
            alt="Project 1"
            maxW="100%"
            h="auto"
          />
        </Box>
        <Box w="100%" h="800" borderRadius={"20px"}>
          <Image
            borderRadius={"20px"}
            src={"Goldenbook.png"}
            alt="Project 1"
            maxW="100%"
            h="auto"
          />
        </Box>
        {/* <Box w="100%" h="100%">
          <Image src={"Goldenbook.png"} alt="Banner 2" maxW="100%" h="auto" />
        </Box> */}
        {/* <Box w="100%" h="100%">
          <Image src={"absense.png"} alt="Banner 3" maxW="100%" h="auto" />
        </Box> */}
      </Carousel>
    </Box>
  );
}
