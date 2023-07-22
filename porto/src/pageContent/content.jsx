import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";

import AboutMe from "./components/aboutMe";
import Motto from "./components/motto";

import AllProject from "./components/AllProject";

import MyEducation from "./components/MyEducation";
import WorkExperience from "./components/workExperience";

export default function Content() {
  return (
    <>
      <Banner />
      <Motto />
      <AboutMe />
      <MyEducation />
      <WorkExperience />
    </>
  );
}
