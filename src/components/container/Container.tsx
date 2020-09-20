import { cx } from "emotion";
import React from "react";
import { useSelector } from "react-redux";
import { ThemeOptions, ThemeState } from "../../redux/reducers/themeReducer";
import {
  container,
  containerLightMode,
  containerWrapper,
} from "./Container.styles";

interface ContainerProps {
  title: string;
}

export const Container: React.FC<ContainerProps> = ({ children, title }) => {
  const theme = useSelector<ThemeState>((state) => state.theme);

  return (
    <main className={containerWrapper}>
      <div
        className={cx(
          container,
          theme === ThemeOptions.LIGHT && containerLightMode
        )}
      >
        <h1>{title}</h1>
        {children}
      </div>
    </main>
  );
};
