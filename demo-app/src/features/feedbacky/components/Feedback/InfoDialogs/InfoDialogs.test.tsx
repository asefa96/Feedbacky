import React, { FC } from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import InfoDialogs from ".";
import { useDisclosure } from "../../../hooks/useDisclosure";
import { FeedbackDialogHeader } from "../Dialog/Dialog.types";
import { InfoMessage } from "./InfoDialogs.types";

const dialogHeaderTestVal: FeedbackDialogHeader = {
 fontSize:"large",

};

const infoMessageTestValSuccess: InfoMessage = {
  messageType: "success",
  message: "Test success msg",
};

const InfoDialog: FC<InfoMessage> = () => {
  const { close, open, isOpen } = useDisclosure();

  return (
    <>
      <button onClick={open}> Click Me! </button>
      <InfoDialogs
        isOpen={isOpen}
        infoMessage={infoMessageTestValSuccess}
        headerSize={dialogHeaderTestVal.fontSize}  />
    </>
  );
};

describe("Feedback Dialog mount, unmount, styling ", () => {
  test("dialog should be mounted with init props", () => {
    render(<InfoDialog {...infoMessageTestValSuccess} />);
    // const feedbackDialog = screen.getByTestId("modal-wrapper");
    const dialogButton = screen.getByRole("button", { name: "Click Me!" });

    expect(dialogButton).toBeInTheDocument();

    fireEvent.click(dialogButton);

    const message = screen.getByText("Test success msg");

    expect(message).toBeInTheDocument();

    expect(message).toHaveStyle({
      color: "green",
    });

    fireEvent.keyUp(document.body, {
      key: "Escape",
    });

    waitFor(() => expect(message).not.toBeInTheDocument());

  });
});
