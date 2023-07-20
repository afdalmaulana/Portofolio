import logo from './logo.svg';
import './App.css';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import Navbar from './navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Landing/Home';
import Timer from './pageContent/components/Project3';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/timer' element={<Timer/>}></Route>
    </Routes>
    </>
  );
}

export default App;
