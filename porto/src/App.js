import logo from './logo.svg';
import './App.css';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import Navbar from './navbar/navbar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Stopwatch from './components/Stopwatch';
import Calculator from './components/Calculator';
import PageProject from './pageContent/components/PageProject';
import AnimateTransaction from './components/AnimateTransaction';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutMe from './pageContent/components/aboutMe';
import AllProject from './pageContent/components/AllProject';
import { AnimatePresence } from 'framer-motion';

// import "./style/main.css"

function App() {
  const location = useLocation()
  return (
    <>
    <Navbar/>
    <AnimatePresence mode='wait'>
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<AboutMe />} />
      <Route path='/timer' element={<Stopwatch />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/pageProject' element={<PageProject />} />
      <Route path='/AllProject' element={<AllProject />} />
    </Routes>
    </AnimatePresence>
    {/* <AnimateTransaction/> */}
    </>
  );
}

export default App;
