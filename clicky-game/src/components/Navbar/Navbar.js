import React from "react";
import "./Navbar.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="test">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.correctIncorrect}</li>

      <li>Current Score: {props.score}</li>

      <li>Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;