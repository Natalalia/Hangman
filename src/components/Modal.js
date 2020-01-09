import React from "react";
import "../css/Modal.css";

function Modal({ playAgain, show, children }) {
  const onPlayAgain = () => {
    playAgain && playAgain();
  };

  if (!show) {
    return null;
  }
  return (
    <div className="modal-wrapper">
      <div className="modal" id="modal">
        <div className="content">{children}</div>
        <div className="actions">
          <button
            className="toggle-button"
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
