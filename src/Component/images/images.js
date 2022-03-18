import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Images() {
  const [arr_of_img, setarr] = useState([]);
  const [status, setstatus] = useState(false);
  const [url, seturl] = useState("");
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
    fetchimages();
  }, []);

  if (arr_of_img?.length == 0) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (arr_of_img?.length != 0) {
  
    if (arr_of_img?.length)
      seturl(
        btoa(String.fromCharCode(...new Uint8Array(arr_of_img[0]?.img?.data)))
      );
    if (url?.length) {
      return (
        <>
          <img src={`data:image/png;base64,${url}`}></img>
        </>
      );
    }
  }
}

export default Images;
