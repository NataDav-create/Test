import React, { useEffect } from "react";

const Modal = ({ closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <p style={{ fontSize: "13px", color: "pink", textAlign: "center" }}>
      Please Enter Value
    </p>
  );
};

export default Modal;
