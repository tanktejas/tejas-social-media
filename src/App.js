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
  const { loginWithRedirect, isAuthenticated, loginWithPopup } = useAuth0();

  useEffect(() => {
    const isloginthisuser = Cookies.get("islog");
    const isneedtologin = Cookies.get("isneedtologin");

    setTimeout(() => {
      if (isneedtologin != "no" && isloginthisuser == "ok") {
        loginWithRedirect();
        var date = new Date();
        Cookies.set("islog", "ok", {
          expires: 1,
        });

        let datenow = date.getDate();
        let month = date.getMonth();
        let yr = date.getFullYear();
        let hour = date.getHours();
        let minu = date.getMinutes();
        const arr = [
          "Jan",
          "Feb",
          "March",
          "April",
          "Jun",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        if (minu >= 58) {
          hour += 1;
          minu = 0;
        }
        hour -= 5;
        minu -= 31;
        if (minu < 0) {
          minu = 60 + minu;
          hour--;

          if (hour < 0) {
            hour = 24 + hour;
            minu = 0;
          }
        }
        console.log(hour);
        document.cookie = `isneedtologin=no; expires=Mon, ${datenow}-${
          arr[month - 1]
        }-${yr} ${hour}:${minu + 2}:00 GMT`;
      }
    }, 5000);
    if (isloginthisuser != undefined && isneedtologin == undefined) {
      // loginWithRedirect();
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
