import React from "react";

import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop";
import SignUpPage from './pages/sign-up/';
import Header from "./components/Header/Header";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div style={{ padding: "30px 60px" }}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
