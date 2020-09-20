import { css } from "emotion";

export const containerWrapper = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

export const container = css({
  transition: ".2s ease",
  padding: "20px",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "1fr 3fr",
  width: "80vw",
  minHeight: "50vh",
  justifyContent: "center",
  alignItems: "center",
  background: "#383838",
  borderRadius: "1em",
  h1: {
    fontSize: "2em",
    borderBottom: "2px white solid",
    paddingBottom: "1em",
  },
});

export const containerLightMode = css({
  background: "#e6ede6",
  color: "#383838",
  h1: {
    borderBottom: "2px #383838 solid",
  },
});
