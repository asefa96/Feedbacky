import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { useDisclosure } from "../../hooks/useDisclosure";
import Modal from "./Modal";
import { ModalHeaderType } from "./Modal.types";

const dialogHeaderTestVal: ModalHeaderType = {
  size: "large",
  variant: "orange",
  text: "Hi test dialog!",
};

const ModalComponent = () => {
  const { close, open, isOpen } = useDisclosure();

  return (
    <>
      <button onClick={open}> Click Me! </button>
      <Modal
        isOpen={isOpen}
        headerSize={dialogHeaderTestVal.size}
        headerVariant={dialogHeaderTestVal.variant}
        headerText={dialogHeaderTestVal.text}
        handleClose={close}
      />
    </>
  );
};

describe("Feedback Dialog mount, unmount, styling ", () => {
  test("Modal should be unmounted by initally ", () => {
    render(<Modal />);
  });

  test("Modal should be mounted with properly styling and unmounted when exit button clicked", () => {
    render(<ModalComponent />);

    const dialogButton = screen.getByRole("button", { name: "Click Me!" });

    expect(dialogButton).toBeInTheDocument();

    fireEvent.click(dialogButton);

    const dialogHeader = screen.getByTestId("modal-header");

    expect(dialogHeader).toBeInTheDocument();

    expect(dialogHeader).toHaveStyle({
      color: "white",
      background: "orange",
      fontSize: "4vh",
    });

    const exitButton = screen.getByTestId("modal-exit-button");

    fireEvent.click(exitButton);

    expect(dialogHeader).not.toBeInTheDocument();
  });

  test("Modal should be unmounted when escape key press", () => {
    render(<ModalComponent />);

    const dialogButton = screen.getByRole("button", { name: "Click Me!" });

    expect(dialogButton).toBeInTheDocument();

    fireEvent.click(dialogButton);

    const dialogHeader = screen.getByTestId("modal-header");

    fireEvent.keyUp(document.body, {
      key: "Shift",
    });
    expect(dialogHeader).toBeInTheDocument();

    fireEvent.keyUp(document.body, {
      key: "Escape",
    });

    waitFor(() => expect(dialogHeader).not.toBeInTheDocument());
  });

  test("Modal should be unmounted when outside click", () => {
    render(<ModalComponent />);

    const dialogButton = screen.getByRole("button", { name: "Click Me!" });

    expect(dialogButton).toBeInTheDocument();

    fireEvent.click(dialogButton);

    const dialogHeader = screen.getByTestId("modal-header");

    fireEvent.mouseDown(document.body);

    expect(dialogHeader).not.toBeInTheDocument();
  });
});
