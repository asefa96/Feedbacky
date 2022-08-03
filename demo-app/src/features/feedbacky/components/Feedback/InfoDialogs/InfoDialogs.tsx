import { FC, useRef } from "react";
import { InfoDialog } from "./InfoDialogs.types";
import Modal from "../../Modal/Modal";
import { InformationMessage } from "./InfoDialogs.styled";

const InfoDialogs: FC<InfoDialog> = ({
  headerSize="large",
  headerVariant="white",
  headerText="Info Dialog",
  isOpen,
  infoMessage,
  dbUrl = "",
  handleClose = Function(),
}) => {
  const close = () => handleClose(false);

  const ContentElement = () => {
    return (
      <InformationMessage
        id="info-message"
        messageType={infoMessage?.messageType}
      >
        {infoMessage?.message}

        {infoMessage?.messageType == "success" ? (
          <a
            href={
              "https://docs.google.com/spreadsheets/d/1P8H5ELZYyeVkw7DltKO_alb6RqBomTHLlwyYw-dVQfQ/edit#gid=0"
            }
          >
            Go to Table
          </a>
        ) : null}
      </InformationMessage>
    );
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        handleClose={close}
        headerSize={headerSize}
        headerText={headerText}
        headerVariant={headerVariant}
        contentElement={<ContentElement />}
      />
    </>
  );
};

export default InfoDialogs;
