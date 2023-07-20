import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";
import Project from "./components/Project";
import AboutMe from "./components/aboutMe";
import Motto from "./components/motto";
import Project2 from "./components/Project2";
import AllProject from "./components/AllProject";
import Timer from "./components/Project3";
import MyEducation from "./components/MyEducation";

export default function Content(){
    return (
        <>
        <Banner/>
        <Motto/>
        <AboutMe/>
        <MyEducation/>
        <AllProject/>
        </>
    )
}