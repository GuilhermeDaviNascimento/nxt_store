import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Product from "./pages/product.jsx";

function App() {
  return (
    <Router>
      {/* <Link to="/"></Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;