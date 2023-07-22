import logo from './logo.svg';
import './App.css';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import Navbar from './navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Stopwatch from './components/Stopwatch';
import Calculator from './components/Calculator';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/timer' element={<Stopwatch/>}></Route>
    <Route path='/calculator' element={<Calculator/>}></Route>
    </Routes>
    </>
  );
}

export default App;
