import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import {Routes, Route} from 'react-router-dom';
import {useNavigate} from "react-router";

const HatsPage = () => {
   let navigate = useNavigate();
   const handleClick = () => {
      navigate('/')
   }
   return (
      <div>
         <h1>HATS PAGE</h1>
         <button onClick={handleClick}>Click me</button>
      </div>
   )
}

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="shop/hats" element={<HatsPage />} />
         </Routes>
      </div>
   );
}

export default App;
