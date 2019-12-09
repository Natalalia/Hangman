import React from "react";
import "../Modal.css";

function Modal({ playAgain, show, children }) {
  const onPlayAgain = () => {
    playAgain && playAgain();
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
            onClick={() => {
              onPlayAgain();
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
