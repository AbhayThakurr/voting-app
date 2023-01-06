import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="container">
      <div className="upper-part">
        <h2>Hello Everyone</h2>
        <h4>Welcome to Decentralized voting system</h4>
        <img
          src="https://cdn-icons-png.flaticon.com/128/4825/4825290.png"
          alt=""
        />
      </div>
      <div className="lower-part">
        <Link to="/detail">
          <button className="btn">Click Here To Vote</button>
        </Link>
      </div>
    </div>
  );
}

export default Content;
