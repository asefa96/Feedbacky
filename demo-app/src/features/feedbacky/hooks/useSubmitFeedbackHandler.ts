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

    messageInfo.setInfoMessageHandler(true);
    messageInfo.setInfoMessage({ message: "Submitting... Please wait!" });

    const submitResponse = await FeedbackService.submit(
      messageInfo.infoMessagesInit,
      url,
      message
    );

    messageInfo.setInfoMessage(submitResponse);
  };

  return { submitFeedback };
}

export default useFeedbackMessageSubmit;
