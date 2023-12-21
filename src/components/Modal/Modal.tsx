import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root")!;

type IProps = {
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal: React.FC<IProps> = ({ onClose = () => {}, children }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackDropClick}>{children}</div>,
    modalRoot,
  );
};
