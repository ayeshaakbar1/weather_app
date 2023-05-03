import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forcast from "./pages/Forcast";
import Home from "./pages/Home";
import "./index.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="forcast" element={<Forcast />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
