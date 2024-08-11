import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const changeModeStatus=()=>{
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor = "black";
      
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "black";

    }
  }
  return (
    <>
      <div className="app">
        {/* <Navbar title="TextUtils" about="About Us"/> */}
        <Navbar title="TextUtils" modeStatus={mode} fnChangeMode={changeModeStatus}/>
        <div className="container my-3">
          <Textarea  modeStatus={mode}/>
        </div>
      </div>
    </>
  );
}
export default App;
