import React, { useEffect, useState } from "react";
import "./home.css";
import url from "../images/people.jpg";
// import HomeNav from "../homenav.js";
import App from "./chart.js";

function Home() {
  const [top5orlessuser, settop] = useState([]);

  function cmp(a, b) {
    return a.count > b.count;
  }
  useEffect(() => {
    fetch("https://apptej.herokuapp.com/alltop5user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (data) => data.json())
      .then((data) => {
        data.sort(cmp);
        settop(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      {/* <HomeNav /> */}
      <div className="home">
        <div className="header">
          <div className="cont">
            <h1>Welcome to The Tejas Social media app</h1>
            <p>
              <b>This app provides you to upload your Posts.</b>
            </p>
            <p>Ranked by machines, curated by humans, updated hourly.</p>
          </div>
          <div className="img">
            <img src={url}></img>
          </div>
        </div>
        <div>
          {/* tranding topics  */}
          <div className="tranding-topics">
            <h1>TOP USER</h1>
            <div className="topics">
              <div className="t1">
                {top5orlessuser.map((item) => {
                  return (
                    <>
                      <div className="q">
                        {/* <i class="fab fa-star"></i> */}
                        <i class="fa-solid fa-star"></i>
                        <span>
                          {item.name.length < 16
                            ? item.name
                            : item.name.substr(0, 15) + "..."}
                        </span>
                        <div className="rric">
                          <i class="fad fa-chart-line"></i>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* EXPLORE BLOGS BY CATEGORY */}
        {/* <div className="tranding-topics">
          <h1>EXPLORE TOPICS BY TAG</h1>
          <div className="topics">
            <div className="t1">
              <div className="q">
                <i class="fa fa-browser"></i>
                <span>Web Devlopment</span>
                <div className="rric">
                  <i class="fad fa-chart-line"></i>
                </div>
              </div>
              <div className="q">
                <i class="fad fa-head-side-brain"></i>
                <span>Machine Learning</span>
                <div className="rric">
                  <i class="fad fa-chart-line"></i>
                </div>
              </div>
              <div className="q">
                <i class="fad fa-mobile"></i>
                <span>Ai</span>
                <div className="rric">
                  <i class="fad fa-chart-line"></i>
                </div>
              </div>
              <div className="q">
                <i class="fa fa-code"></i>
                <span>Coding</span>
                <div className="rric">
                  <i class="fad fa-chart-line"></i>
                </div>
              </div>
              <div className="q">
                <i class="fad fa-camera"></i>
                <span>Tech. Facts</span>
                <div className="rric">
                  <i class="fad fa-chart-line"></i>
                </div>
              </div>
              <div className="q">
                <i class="fad fa-robot"></i>
                <span>Others</span>
                <div className="rric">
                  <i class="fad fa-chart-line-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="explo">
          <div className="total-amount">
            <h1>Total Topics</h1>
          </div>
          <App />
        </div> */}
      </div>
    </>
  );
}
export default Home;
