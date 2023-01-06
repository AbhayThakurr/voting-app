import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const [name, setName] = useState("");
  const [change, setChange] = useState("");
  function handleName(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setChange(name);
  }

  return (
    <div className="detail-background">
      <div className="detail-upperpart">
        <h1>ABES ENGINEERING COLLEGE</h1>
        <h2>Voting Site</h2>

        <img
          src="https://media1.giphy.com/media/XfyAv4ei5nJW0Az9oA/giphy.gif?cid=790b761187bf3ff7d5c6c8b7bcabee6988ca703423f12eaa&rid=giphy.gif&ct=g"
          alt=""
        />
      </div>
      <div className="detail-lowerpart">
        <label htmlFor="name">Enter your name</label>
        <input
          onChange={handleName}
          type="text"
          placeholder="Enter Name"
          id="name"
        />
        <label htmlFor="adm-no">Enter your Admission No.</label>
        <input type="number" placeholder="Enter Admission No." id="adm-no" />
        <label htmlFor="mob-number">Enter your phone number</label>
        <input type="number" name="Phone Number" id="mob-number" />
        <Link to="/key">
          <button onClick={handleClick} className="submit-btn">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Detail;
