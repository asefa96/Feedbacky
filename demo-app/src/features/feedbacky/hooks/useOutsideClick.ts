import {ForwardedRef, ForwardRefExoticComponent, ReactElement, RefObject, useCallback, useEffect} from "react";

const MOUSE_DOWN = 'mousedown';

type OutSideClick={
    handleClose:Function,
    ref?:RefObject<HTMLElement>
}

function useOutsideClick({handleClose, ref}:OutSideClick) {
    
    const handleClick = useCallback((event:any) => {
        /* istanbul ignore else */
        if (ref && !ref.current?.contains(event.target)) {
            handleClose();
        }
    },[handleClose, ref]);

    useEffect(() => {
        
        document.addEventListener(MOUSE_DOWN, handleClick);
        return () => { document.removeEventListener(MOUSE_DOWN, handleClick); };
    }, [handleClick]);

    return { handleClose };
}

export default useOutsideClick;
