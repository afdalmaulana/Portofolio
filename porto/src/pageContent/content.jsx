import { Box, Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";

import AboutMe from "./components/aboutMe";
import Motto from "./components/motto";

import MyEducation from "./components/MyEducation";
import WorkExperience from "./components/workExperience";
import Footer from "../footer/Footer";
import Certi from "./components/Certi";
import AllProject from "./components/AllProject";

export default function Content() {
  return (
    <>
      <Banner />
      <Motto />
      <AboutMe />
      <MyEducation />
      <AllProject />
      <WorkExperience />
      <Footer />
    </>
  );
}
