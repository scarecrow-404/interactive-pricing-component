import "./App.css";
import React from "react";
import Header from "./component/header";
import Form from "./component/Form";


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <>
    <ChakraProvider>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;800&display=swap');
      </style>
      <div className="relative flex flex-col w-screen overflow-x-hidden h-screen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="449"
          className="absolute z-10"
        >
          <path
            fill="#F1F5FE"
            fillRule="evenodd"
            d="M0 0h1440v449H191.5C85.737 449 0 363.263 0 257.5V0z"
          />
        </svg>
        <div className="flex flex-col justify-center items-center w-[100%] content-center z-20">
          <div className=" z-20 ">
            <Header />
          </div>


             <Form />
        
        </div>
      </div>
      </ChakraProvider>
    </>

  );
}

export default App;
