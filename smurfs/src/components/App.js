import React, { Component } from "react";
import "./App.css";
import Village from "./Village";
import Form from "./Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Village />
        <Form />
      </div>
    );
  }
}

export default App;
