import React, { MutableRefObject, useEffect } from "react";
import { FC, useRef, useState } from "react";
import useMessageValidation from "../../../hooks/useMessageValidation";
import Modal from "../../Modal/Modal";
import InfoDialog from "../InfoDialogs";
import { InfoMessage } from "../InfoDialogs/InfoDialogs.types";
import { FeedbackDialogType } from "./Dialog.types";
import {
  Container,
  FeedbackMessageBox,
  SubmitButton,
  ValidationMessage,
} from "./Dialog.styled";
import useFeedbackSubmitHandler from "../../../hooks/useSubmitFeedbackHandler";

const FeedbackDialog: FC<FeedbackDialogType> = ({
  //header
  headerSize="large",
  headerText="Feedback Dialog",
  headerVariant="white",
  //submit
  submitButtonVariant="orange",
  submitButtonText="Submit",
  submitButtonShape="Rectangle",
  submitButtonSize="large",
  //message
  messageMaxLenght=2000,
  messageFontSize="large",
  isOpen = false,
  dbURL = "",
  opacity = "0.5",
  errorMsg = "Error has been occured!",
  succesMsg = "We have got your feedback!",
  handleClose = Function(),
}) => {
  const [showInfoMessage, setshowInfoMessage] = useState(false);
  const [infoMessage, setInfoMessage] = useState<InfoMessage>({});

  const ContentElement = () => {
    const feedbackMessageRef =
      useRef() as MutableRefObject<HTMLTextAreaElement>;

    const { messageLength, submitValidation, validateMessage } =
      useMessageValidation();

    const infoMessagesInit = { errorMsg, succesMsg };

    const { submitFeedback } = useFeedbackSubmitHandler({
      setInfoMessage: setInfoMessage,
      setInfoMessageHandler: setshowInfoMessage,
      infoMessagesInit: infoMessagesInit,
    });

    const submit = async () => {
      handleClose(false);
      submitFeedback(dbURL, feedbackMessageRef.current.value);
    };

    return (
      <Container>
        <FeedbackMessageBox
          placeholder="Type your feedback..."
          autoFocus={true}
          data-testid="feeback-messagebox"
          id="feedback-messagebox"
          messageFontSize={messageFontSize}
          maxLength={messageMaxLenght}
          onChange={validateMessage}
          ref={feedbackMessageRef}
          className="dialog-message-box"
        ></FeedbackMessageBox>
        <ValidationMessage id="valid-message" data-testid="valid-message">
          {messageLength + "/" + messageMaxLenght}
        </ValidationMessage>
        <SubmitButton
          submitButtonShape={submitButtonShape}
          submitButtonSize={submitButtonSize}
          submitButtonText={submitButtonText}
          submitButtonVariant={submitButtonVariant}
          onClick={submit}
          disabled={!submitValidation}
          id="feedback-submit"
          className="dialog-submit-button"
        >
          {submitButtonText}
        </SubmitButton>
      </Container>
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        headerText={headerText}
        headerSize={headerSize}
        headerVariant={headerVariant}
        opacity={opacity}
        contentElement={<ContentElement />}
      />

      <InfoDialog
        handleClose={() => setshowInfoMessage(false)}
        isOpen={showInfoMessage}
        infoMessage={infoMessage}
        dbUrl={dbURL}
      />
    </>
  );
};

export default FeedbackDialog;
