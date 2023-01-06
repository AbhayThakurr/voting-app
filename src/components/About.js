import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about-container">
      <h2>
        If system is integrated with blockchain- a special property called
        immutability protects system. Consider SQL, PHP, or any other
        traditional database systems. You can insert, update, or delete votes.
        But in a blockchain you can just insert data but cannot update or
        delete. Hence when you insert something, it stays there forever and no
        one can manipulate it- Thus name immutable ledger.
      </h2>
      <h2>
        But Building a blockchain system is not enough. It should be
        decentralized i.e if one server goes down or something happens on a
        particular node, other nodes can function normally and do not have to
        wait for victim node’s recovery.
      </h2>
      <img
        className="read"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20200424190016/2020-04-22-21.png"
        alt=""
      />
    </div>
  );
}

export default About;
