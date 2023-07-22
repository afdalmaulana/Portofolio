// import React, { useState } from "react";

import { Box, Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
// import { Button } from "react-scroll";

export default function Calculator() {
  //   const [num1, setNum1] = useState();
  //   const [num2, setNum2] = useState();
  //   menggunakan useState()

  //   const handleOnChange1 = (element) => {
  //     setNum1(+element.target.value);
  //   };

  //   const handleOnChange2 = (element) => {
  //     setNum2(+element.target.value);
  //   };

  function increment() {
    // menggunakan DOM
    // dengan menambahkan simbol + didepan document.getElementById(namaId).value
    // maka akan mengubah string menjadi number
    let num1 = +document.getElementById("num-1").value;
    let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 + num2;
  }
  function decrement() {
    let num1 = +document.getElementById("num-1").value;
    let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 - num2;
  }
  function river() {
    let num1 = +document.getElementById("num-1").value;
    let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 * num2;
  }
  function bagi() {
    let num1 = +document.getElementById("num-1").value;
    let num2 = +document.getElementById("num-2").value;
    document.getElementById("result").textContent = num1 / num2;
  }

  return (
    <>
      <Box mt={"100px"}>
        <Stack>
          <Text fontSize={"32px"} fontWeight={"bold"}>
            Simple Calculator
          </Text>
          <Input id="num-1" type="number" placeholder="Input number"></Input>
          <Input id="num-2" type="number" placeholder="Input number"></Input>
          <Flex justifyContent={"space-around"}>
            <Button onClick={river} colorScheme="yellow" w={"200px"}>
              Kali *
            </Button>
            <Button onClick={increment} w={"200px"} colorScheme="green">
              Tambah +
            </Button>
            <Button onClick={decrement} colorScheme="red" w={"200px"}>
              Kurang -
            </Button>
            <Button w={"200px"} onClick={bagi} colorScheme="blue">
              Bagi /
            </Button>
          </Flex>
          <Text fontSize={"24px"}>Result : </Text>
          <Text fontSize={"32px"} id="result"></Text>
        </Stack>
      </Box>

      {/* <input id="num-1" type="number" /> */}
      {/* <input id="num-2" type="number" />  */}

      {/* coding di bawah menggunakan useState */}
      {/* <input
            id="num-1"
            type="number"
            onChange={(element) => handleOnChange1(element)}
          /> */}
      {/* <input
            id="num-2"
            type="number"
            onChange={(element) => handleOnChange2(element)}
          /> */}
    </>
  );
}
