import {
  CommonButtonProp,
  CommonTextAreaProp,
  Shapes,
  Sizes,
  VariantTypes,
} from "../../../types";
import { ModalType } from "../../Modal/Modal.types";

export type FeedbackDialogHeader = CommonTextAreaProp;

export type FeedbackDialogSubmitButton<T = JSX.IntrinsicElements["button"]> =
  T & SubmitButton;

export type FeedbackDialogType = ModalType &
  MessageBox & SubmitButton &{
    dbURL?: string;
    succesMsg?: string;
    errorMsg?: string;
    classNane?:string;
  };


export type MessageBox = {
  messageMaxLenght?: number;
  messageFontSize?: Sizes;
  messageFontColor?: string;
  className?:string;
};

export type SubmitButton = {
  submitButtonText?: string;
  submitButtonVariant?: VariantTypes;
  submitButtonSize?: Sizes;
  submitButtonShape?: Shapes;
};
