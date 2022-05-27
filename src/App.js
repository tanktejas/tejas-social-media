import logo from "./logo.svg";
// import "./App.css";
import React, { Component, Suspense } from "react";
import Navbar from "./Component/Navbar/Navbar";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Images from "./Component/images/images";
// import Contactus from "./Component/contactus/contact";
import Home from "./Component/Home/home";
import "./App.css";
import Footer from "./Component/footer/footer";
import Contact from "./Component/contactus/contact";
import Cookies from "js-cookie";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  function fun() {
    const ddd = Cookies.get("name1");
    if (ddd != undefined && !isAuthenticated) {
      loginWithRedirect();
    }
  }
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    const currstatus = Cookies.get("islog");
    if (performance.navigation.type == 1 && currstatus == "yes") {
      Cookies.set("islog", "no");
    }
  }, []);

  setTimeout(() => {
    const dd = Cookies.get("name1");
    const islogin = Cookies.get("islog");

    if (dd != undefined && islogin == "no") {
      fun();
      Cookies.set("islog", "yes");
    }
  }, 2000);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<Images />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
