import React, { ReactElement, RefObject } from "react";
import {Sizes, VariantTypes } from "../../types";

export type ModalType = {
  contentElement?: ReactElement;
  handleClose?: Function;
  isOpen?: boolean;
  ref?: RefObject<HTMLElement>;
  opacity?: string;
  headerSize?:Sizes;
  headerText?:string;
  headerVariant?:VariantTypes;
};


export type ModalHeaderType = {
  size?:Sizes;
  text?:string;
  variant?:VariantTypes;
};

export type ModalWrapperType = {
  opacity: string;
};
