import React, { Dispatch, SetStateAction, useState } from "react";
import { WithChildrenProp } from "../types";

type UseStateReturn = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CounterContext = React.createContext({} as UseStateReturn);

export const CounterContextProvider = ({ children }: WithChildrenProp) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
