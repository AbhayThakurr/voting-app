import React from "react";
import { Link } from "react-router-dom";
import "./key.css";

function Key() {
  return (
    <div className="key">
      <label htmlFor="public-key"></label>
      <input type="text" placeholder="Public Key" id="public-key" />
      <Link to="/vote">
        <button className="public-submit" type="submit">
          Submit
        </button>
      </Link>
    </div>
  );
}

export default Key;
