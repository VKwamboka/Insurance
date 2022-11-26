import React from "react";
import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./scss/main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Price from "./components/pricing/Price";
import Contact from "./components/contacts/Contact";
// import Header from "./components/header/Header";
const App = () => {
  return (
    <div>
      <Router>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;