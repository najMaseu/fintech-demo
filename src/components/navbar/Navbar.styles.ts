import { css } from "emotion";

export const navbarWrapper = css({
  background: "#383838",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 3fr 1fr",
  padding: "0.5em",
  nav: {
    ul: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      li: {
        borderBottom: "2px solid transparent",
        borderRadius: "1px",
        transition: ".2s ease",
        margin: "0 5px",
        a: {
          textDecoration: "none",
          color: "white",
        },
      },
      "li:hover": {
        borderBottom: "2px solid white",
      },
      "li:active": {
        borderBottom: "2px solid white",
      },
    },
  },
});
