import React, { Component } from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";

import "./main.scss";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Container />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
