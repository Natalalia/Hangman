import React from "react";
import "./App.css";

import Header from "./components/Header";
import Game from "./components/Game";
import Modal from "./components/Modal";

class App extends React.Component {
  state = {
    show: false
  };

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.showModal();
          }}
        >
          show Modal
        </button>
        <Header />
        <Game />
        <Modal show={this.state.show} onClose={this.showModal}>
          Message in Modal
        </Modal>
      </div>
    );
  }
}

export default App;
