import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ModalHeaderType, ModalWrapperType } from "./Modal.types";

import {
  space,
  variant,
} from "styled-system";

const breatheAnimation = keyframes`
 0% { opacity:0 }
 100% { opacity:1 }
`

export const ModalWrapper = styled.div<ModalWrapperType>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99999999999999;
  background-color: rgba(0, 0, 0, ${(props) => props.opacity || "0.5"});
  align-items: center;
  justify-content: center;
  font-family:sans-serif !important;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const ModalContainer = styled.div`
  position: absolute;
  overflow: hidden;
  padding: 16px;
  margin: auto;
  box-sizing: border-box;
  z-index: 99999;
  background: white;
  border: 0.5px solid #e8e8e8;
  width: 60%;
  height: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7);
  animation-name: ${breatheAnimation};
  animation-duration: 0.5s;
  @media screen and (max-height: 400px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 90%;
  }
`;


export const ModalContent = styled.div`
  width: 100%;
  height: 90%;
  background: white;
  margin: 1rem 0 1rem 0;
`;

export const ValidationMessage = styled.div`
  color: red;
  font-size: 31;
  text-align: end;
`;

export const ExitButton = styled.span`
  font-weight: 600;
  font-size: calc(10px + 2vmin);
  position: absolute;
  top: 0;
  right: 10px;
  background: inherit;
  cursor: pointer;
  &:hover {
    color: blue;
    transform: scale(1.1);
  }
`;

const headerSize = variant({
  prop: "size",
  key: "headerSizes",
});

const headerVariant = variant({
  prop: "variant",
  key: "buttons",
});


export const ModalHeader = styled("div")<ModalHeaderType>(
  {
    display: "flex",
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    marginBottom:"5px",
    borderBottom:"1px solid whitesmoke"
  },
  headerSize,
  headerVariant,
  space,
);

