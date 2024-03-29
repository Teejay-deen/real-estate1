import React from "react";

//import routes
import { Routes, Route } from "react-router-dom";
//import component
import Header from "./components/Header";
import Footer from "./components/Footer";
//import pages
import Home from "./pages/Home";
import ProprtyDetails from "./pages/PropertyDetails";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<ProprtyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
