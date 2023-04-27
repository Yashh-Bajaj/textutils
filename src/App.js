// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from "react";

function App() {

   const [mode, setmode] = useState('dark')


  return (
    <>
    <Navbar title="Made By Yash" mode={mode}/>
    <TextForm heading="Enter the text to analyze"/>
    {/* <About/> */}
    </>
  );
}

export default App;
