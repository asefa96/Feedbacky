import FeedbackService from "../service/Feedback.service";

type infoMessages = {
  setInfoMessage: Function;
  setInfoMessageHandler: Function;
  infoMessagesInit: {
    errorMsg: string;
    succesMsg: string;
  };
};

function useFeedbackMessageSubmit(messageInfo: infoMessages) {
  const submitFeedback = async (url: string, message: string) => {
    //set info message dialog true
    messageInfo.setInfoMessageHandler(true);
    //set info message as submitting
    messageInfo.setInfoMessage({ message: "Submitting... Please wait!" });
    //sumbit message
    const submitResponse = await FeedbackService.submit(
      messageInfo.infoMessagesInit,
      url,
      message
    );
    //set info message as response message

    messageInfo.setInfoMessage(submitResponse);
  };

  return { submitFeedback };
}

export default useFeedbackMessageSubmit;
