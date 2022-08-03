import { ThemeType } from "./types";

const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  buttonFontSizes: ["1vh", "3vmin", "4vmin", "5vmin"],
  headerFontSizes: ["2vh", "3vh", "4vh", "5vh"],
  colors: {
    blue: "#07c",
    tomato: "tomato",
    purple: "purple",
    orange: "orange",
    white: "white",
    warning: "rgb(235, 162, 52)",
    pink:"pink"
  },
  radii: [1, 2, 4, 8, 12, 24, 32, 128, 256],
};

export const theme = {
  breakpoints: ["40em", "52em", "64em"],
  ...baseTheme,
  buttons: {
    primary: {
      color: "white",
      backgroundColor: baseTheme.colors.blue,
    },
    secondary: {
      color: "white",
      backgroundColor: baseTheme.colors.purple,
    },
    danger: {
      color: "white",
      backgroundColor: baseTheme.colors.tomato,
    },
    orange: {
      color: "white",
      backgroundColor: baseTheme.colors.orange,
    },
    white: {
      color: "black",
      backgroundColor: baseTheme.colors.white,
    },
    warning: {
      color: "white",
      backgroundColor: baseTheme.colors.warning,
    },
    pink: {
      color: "white",
      backgroundColor: baseTheme.colors.pink,
    },
  },
  buttonShapes: {
    Pill: {
      borderRadius: baseTheme.radii[8],
    },
    Rectangle: {
      borderRadius: baseTheme.radii[3],
    },
  },
  headerSizes: {
    small: {
      fontSize: baseTheme.headerFontSizes[0],
    },
    medium: {
      fontSize: baseTheme.headerFontSizes[1],
    },
    large: {
      fontSize: baseTheme.headerFontSizes[2],
    },
    xlarge: {
      fontSize: baseTheme.headerFontSizes[3],
    },
  },
  buttonSizes: {
    small: {
      fontSize: baseTheme.buttonFontSizes[0],
      padding: `16px 32px`,
    },
    medium: {
      fontSize: baseTheme.buttonFontSizes[1],
      padding: `18px 36px`,
    },
    large: {
      fontSize: baseTheme.buttonFontSizes[2],
      padding: `20px 40px`,
    },
    xlarge: {
      fontSize: baseTheme.buttonFontSizes[3],
      padding: `24px 48px`,
    },
  },
};
