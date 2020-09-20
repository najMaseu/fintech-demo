import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/actions/actions";
import { ThemeOptions, ThemeState } from "../../redux/reducers/themeReducer";
import { themeSwitchWrapper } from "./ThemeSwitch.styles";

export const ThemeSwitch = () => {
  const theme = useSelector<ThemeState>((state) => state.theme);

  const dispatch = useDispatch();

  return (
    <div className={themeSwitchWrapper}>
      {theme === ThemeOptions.DARK ? (
        <button onClick={() => dispatch(changeTheme(ThemeOptions.LIGHT))}>
          🌞
        </button>
      ) : (
        <button onClick={() => dispatch(changeTheme(ThemeOptions.DARK))}>
          🌕
        </button>
      )}
    </div>
  );
};
