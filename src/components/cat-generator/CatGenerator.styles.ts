import { css } from "emotion";

export const catGeneratorWrapper = css({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: 300,
  img: {
    height: 300,
    width: 300,
    borderRadius: "100%",
    objectFit: "cover",
  },
  h2: {
    width: 300,
  },
  p: {
    fontSize: "1.5em",
  },
});
