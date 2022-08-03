import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import FeedbackDialog from "./index";
import { useDisclosure } from "../../../hooks/useDisclosure";
import FeedbackButton from "../Button/FeedbackButton";

describe("Feedback Dialog mount and styling ", () => {
  test("dialog shouldn't be mounted in dom without isOpen true", () => {
    const test = render(<FeedbackDialog />);

    expect(test).toMatchSnapshot();

    const feedbackHead = screen.queryByText("Feedback Dialog");
    expect(feedbackHead).not.toBeInTheDocument();
  });
});

describe("Feedback Dialog actions", () => {
  const TestDialog = (props: any) => {
    const { close, open, isOpen } = useDisclosure();

    return (
      <>
        <FeedbackButton
          onClick={() => {
            open();
          }}
        />
        <FeedbackDialog
          opacity=""
          dbURL={props.dbURL}
          isOpen={isOpen}
          handleClose={close}
        />
      </>
    );
  };

  test("should handle feedback submit flow", async () => {
    render(<TestDialog />);
  });

  test("should handle feedback submit flow with error", async () => {
    render(<TestDialog dbURL="" />);

    const feedbackButton = screen.getByRole("button", { name: "Feed Me!" });
    expect(feedbackButton).toBeInTheDocument();
    fireEvent.click(feedbackButton);

    const feedbackSubmitButton = screen.getByRole("button", { name: "Submit" });
    expect(feedbackSubmitButton).toBeInTheDocument();

    const feedbackMessageBox = screen.getByTestId("feeback-messagebox");
    expect(feedbackMessageBox).toBeInTheDocument();

    expect(feedbackSubmitButton).toHaveAttribute("disabled");

    expect(screen.getByTestId("valid-message")).toHaveTextContent("0/2000");

    fireEvent.change(feedbackMessageBox, { target: { value: "test" } });

    expect(feedbackSubmitButton).not.toHaveAttribute("disabled");

    expect(screen.getByTestId("valid-message")).toHaveTextContent("4/2000");

    fireEvent.click(feedbackSubmitButton);

    await screen.findByText("Error has been occured!");

    const exitButton = screen.getByTestId("modal-exit-button");

    fireEvent.click(exitButton);

    expect(feedbackMessageBox).not.toBeInTheDocument();
  });

  test("should handle feedback submit flow with success", async () => {
    render(<TestDialog dbURL="https://sheetdb.io/api/v1/d4iorc1s9betr" />);

    const feedbackButton = screen.getByRole("button", { name: "Feed Me!" });
    expect(feedbackButton).toBeInTheDocument();
    fireEvent.click(feedbackButton);

    const feedbackSubmitButton = screen.getByRole("button", { name: "Submit" });
    expect(feedbackSubmitButton).toBeInTheDocument();

    const feedbackMessageBox = screen.getByTestId("feeback-messagebox");
    expect(feedbackMessageBox).toBeInTheDocument();

    expect(feedbackSubmitButton).toHaveAttribute("disabled");

    expect(screen.getByTestId("valid-message")).toHaveTextContent("0/2000");

    fireEvent.change(feedbackMessageBox, { target: { value: "test" } });

    expect(feedbackSubmitButton).not.toHaveAttribute("disabled");

    expect(screen.getByTestId("valid-message")).toHaveTextContent("4/2000");

    fireEvent.click(feedbackSubmitButton);

    const succesText = await screen.findByText("We have got your feedback!");
    expect(succesText).toBeInTheDocument();
  });
});
