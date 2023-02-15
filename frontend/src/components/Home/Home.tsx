import React, { useState, useEffect } from "react";
import Navbhar from "../Navbar/Navbar";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Song from "../Song/Song";
import LeftNavbhar from "../Song/LeftNavbhar";
import TrendingArtist from "../Song/TrendingArtist";
function Home() {
  const [User, setUser] = useState(localStorage.getItem("name"));

  useEffect(() => {
    setUser(localStorage.getItem("name"));
    // console.log(User)
  }, [User]);
  return (
    <>
      <Navbhar />

      <div className="row">
        <div
          className="col-2"
          style={{ background: "linear-gradient(to right,#000000, #E84393)" }}
        >
          <h4 style={{ color: "white", padding: "10px", textAlign: "left" }}>
            RELEASE THIS WEEK
          </h4>
          <LeftNavbhar />
        </div>
        <div
          className="col-7"
          style={{ textAlign: "center", paddingLeft: "5%" }}
        >
          <h2 style={{ color: "white", padding: "10px" }}>
            DISCOVER YOUR RHYTHYM
          </h2>
          <Song />
        </div>
        <div className="col-3">
          <h2 style={{ color: "white", padding: "10px", textAlign: "left" }}>
            TRENDING ARTIST
          </h2>
          <TrendingArtist />
        </div>
      </div>
    </>
  );
}

export default Home;
