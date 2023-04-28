// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from "react";
import Alert from './components/Alert';

function App() {

   const [mode, setMode] = useState('light')
   const [alert, setAlert] = useState(null)

  const showalert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }



   const toggleMode = ()=>{
    if (mode ==='light'){

      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showalert("Dark Mode has been enabled",'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode has been enabled",'success')
    }
   }


  return (
    <>
    <Navbar title="Made By Yash" mode={mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <TextForm showalert = {showalert} heading="Enter the text to analyze" mode={mode}/>
    {/* <About/> */}
    </>
  );
}

export default App;
