import logo from './logo.svg';
import './App.css';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import Navbar from './navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/timer' element={<Stopwatch/>}></Route>
    </Routes>
    </>
  );
}

export default App;
