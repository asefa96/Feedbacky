import React from "react";
import { FC } from "react";
import { FeedbackButtonType } from "./Button.types";
import { Button } from "./Button.styled";
import { theme } from "../../../themes";
import { ThemeProvider } from "@emotion/react";

const FeedbackButton: FC<FeedbackButtonType> = ({
  onClick,
  size="large",
  variant="primary",
  shape="Pill",
  text = "Feed  Me!",
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          onClick={onClick}
          id="feedback-button"
          size={size}
          variant={variant}
          shape={shape}
        >
          {text}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default FeedbackButton;
