"use client"
import React, { useState } from "react";
import Navbar from "./Components/Navbar/navbar"
import Aboutus from "./Components/Navbar/Aboutus";

function App() {
  const [mode , setMode] = useState('darks');
  const toggleMode = () =>{
    if (mode === 'light' ){
    setMode ='dark'
  }
  else {
  setMode ='light'
 }
}
  return (
    <div className="App">
    <Navbar title ="TextUtil2" mode={mode} toggleMode={toggleMode}/>
    <div className="container"> 
   {/* <TextForm heading="Enter Text here"/> */}
   <Aboutus />

    </div>

    </div>
  );
}                          
export default App
{/* <Body />
<Dropdown /> */}
