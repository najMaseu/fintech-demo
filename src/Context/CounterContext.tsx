import React, { Dispatch, SetStateAction, useState } from "react";

type UseStateReturn = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const CounterContext = React.createContext({} as UseStateReturn);

export const CounterContextProvider: React.FC = ({ children }) => {
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
