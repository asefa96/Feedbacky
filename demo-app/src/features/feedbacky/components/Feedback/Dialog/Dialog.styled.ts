import styled from "@emotion/styled";
import { buttonStyle, variant } from "styled-system";
import { FeedbackDialogSubmitButton, MessageBox } from "./Dialog.types";

export const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100%;
`;

const messageFontSize = variant({
  prop: "messageFontSize",
  key: "headerSizes",
});

export const FeedbackMessageBox = styled("textarea")<MessageBox>(
  {
    height: "100%",
    boxSizing: "border-box",
    padding: "15px",
    fontFamily: "inherit",
  },
  messageFontSize
);

export const ValidationMessage = styled.div`
  color: red;
  font-size: 1.5rem;
  text-align: end;
  margin-top: 5px;
  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;

const buttonSize = variant({
  prop: "submitButtonSize",
  key: "buttonSizes",
});

const buttonShapes = variant({
  prop: "submitButtonShape",
  key: "buttonShapes",
});

const buttonVariant = variant({
  prop: "submitButtonVariant",
  key: "buttons",
});

export const SubmitButton = styled("button")<FeedbackDialogSubmitButton>(
  ` 
  width: 100%;
  height: 10%;
  border: none;
  cursor: pointer;
  padding:5px !important;
  &:hover {
    background: blue;
    transition-duration: 0.5s;
  }
  &:active {
    transform: scale(0.95);
    transition-duration: 0.1s;
  }
  &:disabled {
    background: gray;
    pointer-events: none;
  }
`,
  buttonStyle,
  buttonSize,
  buttonShapes,
  buttonVariant
);
