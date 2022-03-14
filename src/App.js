import React from 'react';
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import {Routes, Route} from 'react-router-dom';
import Header from "./components/Header/Header";

function App() {
   return (
      <div style={{padding: '30px 60px'}}>
         <Header />
         <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/shop" exact element ={<ShopPage />} />
         </Routes>
      </div>
   );
}

export default App;
