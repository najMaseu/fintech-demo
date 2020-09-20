import { css } from "emotion";

export const themeSwitchWrapper = css({
  justifySelf: "end",
  button: {
    transition: ".2s ease",
    border: "none",
    paddingRight: 2,
    outline: "none",
    borderRadius: "100%",
    background: "#383838",
  },
  "button:hover": {
    background: "darkgrey",
  },
});
