import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');//whether dark mode is enable or not
  const [alert, setAlert]= useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
     }) 
     setTimeout(() => {
      setAlert(null);
     }, 1500);
  }

  const toggleMode = ()=>{
     
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#35353c';
      showAlert("Dark Mode as been enabled.","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode as been enabled.","success");

    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3" >
    <Routes>
        <Route path='/' element={<TextForms showAlert={showAlert} heading="TextUtils Case converter and text editor." mode={mode}/>}></Route>
        <Route path='about/' element={<About mode={mode} />}></Route>
    </Routes> 
    </div>
    </BrowserRouter>      
    
    
    </> 
  );
}

export default App;
