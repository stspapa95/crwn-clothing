import React from 'react';
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import {Routes, Route} from 'react-router-dom';

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/shop" exact element ={<ShopPage />} />
         </Routes>
      </div>
   );
}

export default App;
