import logo from './logo.svg';
import './App.css';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Stopwatch from './components/Stopwatch';
import Calculator from './components/Calculator';
import PageProject from './pageContent/components/PageProject';
import AnimateTransaction from './components/AnimateTransaction';

// import "./style/main.css"

function App() {
  return (
    <>
    <Navbar/>
    <AnimateTransaction/>
    </>
  );
}

export default App;
