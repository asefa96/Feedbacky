import React, { useEffect } from "react";
import { FC, useRef, useState } from "react";
import ReactDOM from "react-dom";
import useEscapeKey from "../../hooks/useEscapeKey";
import useOutsideClick from "../../hooks/useOutsideClick";
import { ModalType } from "./Modal.types";
import {
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ExitButton,
} from "./Modal.styled";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../../themes";

const Modal: FC<ModalType> = ({
  headerText="Feedback Dialog",
  headerSize="large",
  headerVariant="white",
  contentElement,
  isOpen,
  opacity = "0.5",
  handleClose = Function(),
}) => {
  const ref = useRef(null);
  const closed = () => handleClose(false);

  useOutsideClick({ handleClose: closed, ref: ref });
  useEscapeKey(closed);

  return ReactDOM.createPortal(
    <>
      {isOpen ? (
        <ThemeProvider theme={theme}>
          <ModalWrapper opacity={opacity} id="modal-container" data-testid="modal-wrapper">
            <ModalContainer ref={ref}>
              <ModalHeader size={headerSize} variant={headerVariant}  data-testid="modal-header">
                {headerText}
              </ModalHeader>
              <ExitButton id="modal-exit-button" data-testid="modal-exit-button" onClick={closed}>
                X
              </ExitButton>
              <ModalContent>{contentElement}</ModalContent>
            </ModalContainer>
          </ModalWrapper>
        </ThemeProvider>
      ) : (
        ""
      )}
    </>,
    document.body
  );
};

export default Modal;
