import { Sizes } from "../../../types";
import { ModalType } from "../../Modal/Modal.types";
import { FeedbackDialogType } from "../Dialog/Dialog.types";

export type InfoMessage ={
    messageType?: string;
    message?:string;
    fontSize?:Sizes
}

export type InfoType = "err" | "success" | null;

export type InfoDialog = ModalType & {
  infoMessage:InfoMessage,
  dbUrl?:string
};
