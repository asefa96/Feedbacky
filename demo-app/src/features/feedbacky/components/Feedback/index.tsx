import React from "react";
import { FC } from "react";
import { useDisclosure } from "../../hooks/useDisclosure";
import { FeedbackyType } from "../../types";
import FeedbackButton from "./Button";
import FeedbackDialog from "./Dialog";

const Feedbacky: FC<FeedbackyType> = ({ feedbackyButton, feedbackyDialog }) => {
  const { close, open, isOpen } = useDisclosure();
  return (
    <>
      <FeedbackButton {...feedbackyButton} onClick={open} />
      <FeedbackDialog
        {...feedbackyDialog}
        dbURL="https://sheetdb.io/api/v1/d4iorc1s9betr"
        isOpen={isOpen}
        handleClose={close}
      />

    </>
  );
};

export default Feedbacky;
