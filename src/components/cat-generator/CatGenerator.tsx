import React from "react";
import { useCats } from "../../hooks/useCats";
import { catGeneratorWrapper } from "./CatGenerator.styles";

export const CatGenerator = () => {
  const { catData, isFetching } = useCats();

  return (
    <div className={catGeneratorWrapper}>
      <p>We're fetching a cat image from an API using custom hook! 👉</p>
      {isFetching ? (
        <h2>Please wait...</h2>
      ) : (
        <img src={catData} alt={"random cat"} />
      )}
    </div>
  );
};
