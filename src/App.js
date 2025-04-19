// import logo from './logo.svg';
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
// import About from './component/About';
import React, {useState} from 'react';
import TextForm from './component/TextForm';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState (null);
  const showAlert =(message, type)=>{
setAlert ({
  msg:message,
  type:type
})
setTimeout (() =>{
  setAlert (null);
}, 1500);
  }

  return (
    <>
     {/* <Router> */}
        <Alert alert={alert} />
        <Navbar />
        <div className='container'>
        <TextForm heading="write ur opinion" showAlert={showAlert}/>
          {/* <Routes>
            <Route path="/about" element={<About />} /> */}
          
            {/* <Route path="/" element={<TextForm heading="write ur opinion" showAlert={showAlert} />} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
