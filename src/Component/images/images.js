import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Images() {
  const [arr_of_img, setarr] = useState([]);
  const [status, setstatus] = useState(false);

  const fetchimages = () => {
    fetch("http://localhost:3006/getimageinformation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then((data) => {
        setarr(data);
        console.log(data);
        setstatus(true);
      });
  };
  useEffect(async () => {
    const data = await fetch("http://localhost:3006/getimageinformation", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataa = await data.json();

    setarr(dataa);
    console.log(arr_of_img);
    setstatus(true);
  }, []);

  if (arr_of_img.length == 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (arr_of_img.length != 0) {
    return (
      <>
        <p>{arr_of_img[0].id}</p>
      </>
    );
  }
}

export default Images;
