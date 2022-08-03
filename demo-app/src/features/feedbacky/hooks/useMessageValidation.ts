import { useEffect, useState } from "react";
import FeedbackUtil from "../utils/validations";

function useMessageValidation() {
  const [messageLength, setMessageLength] = useState(0);
  const [submitValidation, setSubmitValidation] = useState(false);
 
  const validateMessage = (event: any) => {
    const msg = event.target.value;
    const validationMsg=FeedbackUtil.messageValidation(msg)
    setSubmitValidation(validationMsg);
    setMessageLength(msg.length);
  };


  return {
    messageLength,
    submitValidation,
    validateMessage,
  };
}

export default useMessageValidation;
