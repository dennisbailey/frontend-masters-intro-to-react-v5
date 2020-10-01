import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
    const elRef = useRef(null);

    if (!elRef.current) {
        const div = document.createElement("div");
        elRef.current = div;
    }

    useEffect(() => {
        const modalRoot = docuemnt.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    }, []); // No dependencies, only run once

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
