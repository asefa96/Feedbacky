import { infoMessagesType, SubmitInfoType } from "../types";
import ApiService from "./Api.service";

class FeedbackService extends ApiService {
  async submit(
    responseInfoMessage: infoMessagesType,
    url: string,
    message: string
  ): Promise<SubmitInfoType | undefined> {
    try {
      const response = await this.post(url, {
        Feedback: message,
        Date: new Date(),
      });

      /* istanbul ignore else */

      if (response.status == 201) {
        return {
          messageType: "success",
          message: responseInfoMessage.succesMsg,
        };
      }
    } catch (err) {
      return {
        messageType: "err",
        message: responseInfoMessage.errorMsg,
      };
    }
  }
}

export default new FeedbackService();
