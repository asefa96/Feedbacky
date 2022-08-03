import styled from "@emotion/styled";
import {
  borderRadius,
  buttonStyle,
  space,
  variant,
} from "styled-system";

const buttonSize = variant({
  prop: "size",
  key: "buttonSizes",
});

const buttonShapes = variant({
  prop: "shape",
  key: "buttonShapes",
});

export const Button = styled("button")(
  {
    appearance: "button",
    border: 0,
    outline: 0,
    position: "fixed",
    bottom: "1rem",
    right: "1rem",
    cursor: "pointer",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.3)",
  },
  `
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
  `,
  borderRadius,
  buttonStyle,
  buttonSize,
  space,
  buttonShapes,
);

Button.defaultProps = {
  variant: "primary",
  shape: "Pill",
};
