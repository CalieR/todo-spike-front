import React, { Component } from "react";
import TodoCard from "./TodoCard";

class AllTodos extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

export default AllTodos;
