import { useEffect, useCallback } from "react";

const KEY_NAME_ESC = "Escape";
const KEY_EVENT_TYPE = "keyup";

function useEscapeKey(handleClose: Function) {
  const handleEscKey = useCallback(
    (event: { key: string }) => {
      /* istanbul ignore else */
      
      if (event.key === KEY_NAME_ESC) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

    return () => {
      document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
    };
  }, [handleEscKey]);
}

export default useEscapeKey;
