import React, { Component } from "react";
import Form from "../../components/Form";
import ListItem from "../../components/ListItem";
class TodoList extends Component {
  state = {
    todos: [],
  };

  addTodo = (val) => {
    if (val !== "")
      this.setState({
        inputValue: "",
        todos: [
          ...this.state.todos,
          { id: this.state.todos.length + 1, isDone: false, task: val },
        ],
      });
  };

  listTodo = () =>
    this.state.todos.map((item) => (
      <div className="row" key={item.id}>
        <ListItem isDone={item.isDone} task={item.task} />
      </div>
    ));

  render() {
    return (
      <div className="container">
        <h1>Ma TodoList</h1>
        <div className="row">
          <Form addTodo={this.addTodo} />
        </div>
        {this.listTodo()}
      </div>
    );
  }
}
export default TodoList;
