function messageValidation(message: string):boolean {
  //message empty check
  return message.length > 0 && message.trim() != "";
}

let FeedbackUtil = {
  messageValidation,
};

export default FeedbackUtil;
