import React, { Component } from "react";

class TodoCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.todo.picture} alt="" />
        <p>{this.props.todo.task}</p>
      </div>
    );
  }
}

export default TodoCard;
