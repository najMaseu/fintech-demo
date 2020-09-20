import React from "react";
import { container, containerWrapper } from "./Container.styles";

export const Container: React.FC = ({ children }) => {
  return (
    <main className={containerWrapper}>
      <div className={container}>{children}</div>
    </main>
  );
};
