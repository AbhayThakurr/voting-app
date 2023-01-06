import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Content from "./components/Content";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Detail from "./components/Detail";
import Key from "./components/Key";
import Vote from "./components/Vote";
import Thank from "./components/Thank";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a0b1e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <div>
      <Router>
        <Navbar
          title="Voting System"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Content />
          </Route>
          <Route exact path="/detail">
            <Detail mode={mode} toggleMode={toggleMode} />
          </Route>
          <Route exact path="/key">
            <Key />
          </Route>
          <Route exact path="/vote">
            <Vote />
          </Route>
          <Route exact path="/thanks">
            <Thank />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
