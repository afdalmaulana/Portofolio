import Navbar from "../navbar/navbar";
import Banner from "../pageContent/components/Banner";
import AboutMe from "../pageContent/components/aboutMe";
import Skills from "../pageContent/components/skills";
import Motto from "../pageContent/motto";

export default function Home(){
    return (
        <main>
            <Navbar/>
            <Banner/>
            <Motto/>
            <AboutMe/>
            {/* <Skills/> */}
        </main>
    )
}