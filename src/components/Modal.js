import React from "react";
import "../Modal.css";

function Modal({ onClose, show, children }) {
  const onCloseModal = e => {
    onClose && onClose(e);
  };

  if (!show) {
    return null;
  }
  return (
    <div class="modal-wrapper">
      <div class="modal" id="modal">
        <div class="content">{children}</div>
        <div class="actions">
          <button
            class="toggle-button"
            onClick={e => {
              onCloseModal(e);
            }}
          >
            Play again!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
