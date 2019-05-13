import React, { Component } from "react";
import "./App.css";
import Uploader from "./components/Uploader";
import AllTodos from "./components/AllTodos";

const TODOS_URL = "http://localhost:3002/todos";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount = () => {
    return fetch(TODOS_URL)
      .then(resp => resp.json())
      .then(jso =>
        this.setState({
          todos: jso
        })
      );
  };

  render() {
    return (
      <div className="App">
        <h1>Homepage</h1>
        <AllTodos todos={this.state.todos} />
        <Uploader />
      </div>
    );
  }
}

export default App;
