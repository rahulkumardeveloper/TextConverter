import "./App.css";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import Alert from "./Components/Alert";
import About from "./Components/About";
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      massage: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }


  const changeModeStatus = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = "black";
      showAlert(" Changed into dark mode changed.", 'success');
      document.title = " Text Converter - dark mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      showAlert(" Changed into Light mode changed.", 'success');
      document.title = " Text Converter - light mode"

    }
  }
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Navbar title="TextConverter" modeStatus={mode} fnChangeMode={changeModeStatus} />
          <Alert showAlert={showAlert} alert={alert} />
          <Routes>
            <Route path="/" element={<Textarea className="container my-3" modeStatus={mode} showAlert={showAlert} />} />
            <Route path="/about" element={<About modeStatus={mode} />} />
          </Routes>
        </div>
      </BrowserRouter >
    </>
  );
}
export default App;
