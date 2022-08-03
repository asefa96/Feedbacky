import styled from "@emotion/styled";
import { InfoMessage } from "./InfoDialogs.types";

export const InformationMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100%;
  flex-direction: column;
  gap: 5px;
  font-weight: bold;
`;


export const InformationMessage = styled(
  InformationMessageWrapper
)<InfoMessage>`
font-size:5vmin;
  color: ${(props) =>
    props.messageType == "err"
      ? "red"
      : props.messageType == "success"
      ? "green"
      : "black"};
  );
`;


