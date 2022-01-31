import { css } from "emotion";

export const navbarWrapper = css({
  transition: ".2s ease",
  background: "#383838",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 3fr 1fr",
  padding: "0.5em",
  nav: {
    button: {
      background: "transparent",
    },
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
    },
  },
});

export const navbarWrapperLightMode = css({
  background: "#e6ede6",
  color: "#383838",
  nav: {
    ul: {
      li: {
        a: {
          color: "#383838",
        },
      },
      "li:hover": {
        borderBottom: "2px solid #383838",
      },
    },
  },
});
