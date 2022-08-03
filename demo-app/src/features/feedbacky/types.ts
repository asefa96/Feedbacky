import { FeedbackButtonType } from "./components/Feedback/Button/Button.types";
import { FeedbackDialogType } from "./components/Feedback/Dialog/Dialog.types";

export type Sizes = "xlarge" | "large" | "medium" | "small"
export type Shapes = "Rectangle" | "Pill";

export type Size = Record<Sizes, ButtonSizeType>;
export type Shape = Record<Shapes, ButtonShapeType>;
export type Variants = Record<VariantTypes, VariantType>;

export type VariantTypes =
  | "primary"
  | "secondary"
  | "danger"
  | "orange"
  | "white"
  | "warning";

export type VariantType = {
  color: string;
  backgroundColor: string;
};

export type ButtonShapeType = {
  borderRadius?: number;
};

export type ThemeType = {
  buttons: Variants;
  buttonShapes: Shape;
  buttonSizes: Size;
};
export type ButtonSizeType = {
  fontSize?: number;
  padding?: string;
  borderRadius?:number
};

export interface CommonProp {
  labelText?: string;
  labelTextColor?: string;
  bgColor?: string;
  fontSize?: Sizes;
}

export type CommonTextProp = {
  text?: string;
  textColor?: string;
  textWeight?: string;
  fontFamily?: string;
  fontSize?: Sizes;
};

export type CommonTextAreaProp = CommonTextProp

export type CommonButtonProp = {
  text?: string;
  variant?: VariantTypes;
  size?: Sizes;
  shape?: Shapes;
};

export type FeedbackyType = {
  feedbackyButton?: FeedbackButtonType;
  feedbackyDialog?: FeedbackDialogType;
};

export type infoMessagesType = {
  errorMsg: string;
  succesMsg: string;
};

export type FeedbackMessageType = {
  feedbackMsg: string;
  date: Date;
};

export type SubmitInfoType = {
  messageType: "err" | "success";
  message: string;
};
