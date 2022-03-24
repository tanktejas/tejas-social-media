import React from "react";
import "./button.css";

function Navbar({ state, setstate }) {
  return (
    <>
      <div
        className="button1"
        onClick={() => {
          setstate(true);
        }}
      >
        ADD IMAGE
      </div>
    </>
  );
}

export default Navbar;
