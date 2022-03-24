import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Images from "./Component/images/images";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        
          <Routes>
            <Route path="/about" element={<Images />} />
            {/* <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
      
      </BrowserRouter>
    </>
  );
}

export default App;
