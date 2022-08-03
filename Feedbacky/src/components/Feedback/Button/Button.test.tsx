import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackButton from "./index";
import {theme} from "../../../themes"
describe("Feecback button", () => {
  test("should render with initial style & values", () => {
    render(<FeedbackButton />);

    // Find an element with a role of button & init text of 'Feed Me!'
    const feedbackButton = screen.getByRole("button", { name: "Feed Me!" });

    // Expect init
    expect(feedbackButton).toHaveStyle({
      borderRadius: "256px",
      color: theme.buttons.primary.color,
      backgroundColor: theme.buttons.primary.backgroundColor,
      position: "fixed",
    });
  });

  test("should render with props values by correctly", () => {
    render(
      <FeedbackButton
       text="Hi tester!"
       variant="danger"
       size="large"
       shape="Rectangle"
      />
    );

    // Find an element with a role of button & init text of 'Hi tester!'
    const feedbackButton = screen.getByRole("button", { name: "Hi tester!" });

    // Expect the background color to be tomato, and correct styles
    expect(feedbackButton).toHaveStyle({
      borderRadius: "8px",
      color: theme.buttons.danger.color,
      backgroundColor: theme.buttons.danger.backgroundColor,
      position: "fixed",
    });
  });
//should be  called
  test("should pass prop click event", () => {
    const spy = jest.fn();

    render(<FeedbackButton onClick={spy} />);

    const feedbackButton = screen.getByRole("button");
    fireEvent.click(feedbackButton);

    expect(spy).toHaveBeenCalled();
  });
});
