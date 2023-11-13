import { Box } from "@chakra-ui/react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "../Landing/Home";
import Stopwatch from "./Stopwatch";
import Calculator from "./Calculator";
import PageProject from "../pageContent/components/PageProject";

import {AnimatePresence} from 'framer-motion'
import AboutMe from "../pageContent/components/aboutMe";
import AllProject from "../pageContent/components/AllProject";

export default function AnimateTransaction(){
    const location = useLocation()
return(
    <AnimatePresence>

    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/abouut' element={<AboutMe />} />
      <Route path='/timer' element={<Stopwatch />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/pageProject' element={<PageProject />} />
      <Route path='/AllProject' element={<AllProject />} />
    </Routes>
    </AnimatePresence>
)
}