import React from "react";
import reactdom from "react-dom";
import "./Navbar.css";
import logo from "../Navbar/logo (2).png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";

//Pages
function NavBar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [click, setClick] = React.useState(false);
  const { logout } = useAuth0();
  const { user } = useAuth0();
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [islogin, setIs] = useState(false);

  useEffect(async () => {
    const usercookie = await Cookies.get("name1");

    if (user == undefined) {
      // setIs(true);
      console.log(user);
      // loginWithRedirect();
    }
  }, []);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* Gallery

            <i className="fa fa-gallery"></i>
            <i class="fa-brands fa-phoenix-squadron"></i> */}
            <img src={logo}></img>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Images
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Video
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
            {!isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/log-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => {
                    loginWithRedirect();
                    // Cookies.set("name", "tejas");
                    // const name = user.name;
                    // console.log(name + "jbkjgsdvsdklhkjfjdkfa");

                    Cookies.set("islog", "ok", {
                      expires: 1,
                    });

                    // let datenow = date.getDate();
                    // let month = date.getMonth();
                    // let yr = date.getFullYear();
                    // let hour = date.getHours();
                    // let minu = date.getMinutes();
                    // const arr = [
                    //   "Jan",
                    //   "Feb",
                    //   "March",
                    //   "April",
                    //   "Jun",
                    //   "July",
                    //   "Aug",
                    //   "Sep",
                    //   "Oct",
                    //   "Nov",
                    //   "Dec",
                    // ];
                    // if (minu >= 58) {
                    //   hour += 1;
                    //   minu = 0;
                    // }
                    // hour -= 5;
                    // minu -= 31;
                    // if (minu < 0) {
                    //   minu = 60 + minu;
                    //   hour--;

                    //   if (hour < 0) {
                    //     hour = 24 + hour;
                    //     minu = 0;
                    //   }
                    // }
                    // console.log(hour);
                    // document.cookie = `isneedtologin=no; expires=Mon, ${datenow}-${
                    //   arr[month - 1]
                    // }-${yr} ${hour}:${minu + 2}:00 GMT`;
                    // alert(document.cookie.at(0));
                  }}
                >
                  Log-in
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/log-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => logout()}
                >
                  Log-out ({user.nickname})
                </NavLink>
              </li>
            )}
            {!isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/Sign-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => loginWithRedirect()}
                >
                  Sign-in
                </NavLink>
              </li>
            )}
            {isAuthenticated && (
              <li className="nav-item losi">
                <NavLink
                  exact
                  to="/Sign-in"
                  activeClassName="active"
                  className="nav-links"
                  onClick={() => {
                    window.location.replace(
                      `https://lighthearted-vacherin-dd2359.netlify.app//#/${user.email}/Dashboard`
                    );
                  }}
                >
                  View-profile
                </NavLink>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
function Navbar() {
  return (
    <>
      <NavBar />
    </>
  );
}

export default Navbar;
