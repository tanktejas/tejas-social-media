import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/card";
import Poppop from "../popupwindow/poppop";
import Bottom from "./bottom_add_button";

function Images() {
  const [arr_of_img, setarr] = useState([]);
  const [status, setstatus] = useState(false);
  const [url, seturl] = useState("");
  const [stateforadd, setadd] = useState(false);

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
    const url = `http://localhost:3006/${arr_of_img[0].img.data}`;
    return (
      <>
        <div className="pages">
          {arr_of_img.map((item) => {
            return (
              <>
                <Card
                  title={item.title}
                  desc={item.desc}
                  name={item.name}
                  img={item.img}
                  postdate={item.postdate}
                />
              </>
            );
          })}
        </div>
        <Bottom state={stateforadd} setstate={setadd} />
        <Poppop state={stateforadd} setstate={setadd} />
        
      </>
    );
  }
}

export default Images;
