import { cx } from "emotion";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeOptions, ThemeState } from "../../redux/reducers/themeReducer";
import { ThemeSwitch } from "../theme-switch/ThemeSwitch";
import { navbarWrapper, navbarWrapperLightMode } from "./Navbar.styles";

export const Navbar = () => {
  const theme = useSelector<ThemeState>((state) => state.theme);

  return (
    <div
      className={cx(
        navbarWrapper,
        theme === ThemeOptions.LIGHT && navbarWrapperLightMode
      )}
    >
      <span>
        FinTech Demo
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
