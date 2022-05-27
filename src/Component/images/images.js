import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/card";
import Poppop from "../popupwindow/poppop";
import Bottom from "./bottom_add_button";
import "./images.css";
import { useAuth0 } from "@auth0/auth0-react";

function Images() {
  const { user } = useAuth0();

  const [arr_of_img, setarr] = useState([]);
  const [status, setstatus] = useState(false);
  const [url, seturl] = useState("");
  const [stateforadd, setadd] = useState(false);
  const [curruser, setcurruser] = useState("");

  const fetchimages = () => {
    fetch("https://md112.herokuapp.com/list", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then((data) => {
        setarr(data);
        console.log(data);
        // console.log(data.Contents[0].Key);
        setstatus(true);
      });
  };

  useEffect(async () => {
    fetchimages();
  }, []);

  if (arr_of_img?.length == 0 && !status) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  console.log("arr_of_img");
  if (arr_of_img?.length != 0 || status) {
    if (user != undefined && user != curruser) {
      setcurruser(user);
    }
    return (
      <>
        <div className="root1">
          <div className="pages">
            {arr_of_img.map((item) => {
              return (
                <>
                  <Card
                    name={item.name?.toUpperCase()}
                    desc={item.desc}
                    img={item.Key}
                    postdate={item.postdate?.substring(0, 10)}
                    avatarkeyword={item.nameofuser
                      ?.substring(0, 1)
                      .toUpperCase()}
                  />
                </>
              );
            })}
          </div>
          <Bottom state={stateforadd} setstate={setadd} />
          <Poppop state={stateforadd} setstate={setadd} user={user} />
        </div>
      </>
    );
  }
}

export default Images;
