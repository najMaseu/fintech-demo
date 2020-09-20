import React from "react";
import { Link } from "react-router-dom";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";
import { navbarWrapper } from "./Navbar.styles";

export const Navbar = () => {
  return (
    <div className={navbarWrapper}>
      <span>
        FinTech Demo{" "}
        <span role={"img"} aria-label={"emoji"}>
          💻
        </span>
      </span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <h1>|</h1>
          <li>
            <Link to="/cats">Cats</Link>
          </li>
        </ul>
      </nav>
      <ThemeSwitch />
    </div>
  );
};
