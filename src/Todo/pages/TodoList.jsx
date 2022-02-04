import React, { Component } from "react";
import Form from "../../components/Form";
import ListItem from "../../components/ListItem";
// import uuid from "uuid";

const TODOLIST = "TodoList";

class TodoList extends Component {
  state = {
    inputValue: "",
    todos: [],
    todoEdit: null,
  };

  componentDidMount() {
    const datas = this.getLocalStorage(TODOLIST);
    if (datas != null) this.setState({ todos: datas });
  }

  addTodo = (val) => {
    if (val !== "") {
      let change;
      if (this.state.todoEdit != null)
        change = [
          ...this.state.todos,
          {
            id: this.state.todoEdit.id,
            isDone: this.state.todoEdit.isDone,
            task: val,
          },
        ];
      else
        change = [
          ...this.state.todos,
          { id: this.state.todos.length + 1, isDone: false, task: val },
        ];

      this.setState(
        {
          inputValue: "",
          todos: change,
        },
        this.setLocalStorage(TODOLIST, change)
      );
    }
  };

  listTodo = () =>
    this.state.todos.map((item) => (
      <div className="row mx-2" key={item.id}>
        <ListItem
          id={item.id}
          isDone={item.isDone}
          task={item.task}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
        />
      </div>
    ));

  deleteTodo = (id) => {
    const save = [];
    this.state.todos.forEach((elt, index) => {
      if (elt.id != id) save.push(elt);
    });
    this.setState({ todos: [...save] });
    this.setLocalStorage(TODOLIST, [...save]);
  };

  editTodo = (id) => {
    const todo = this.state.todos.find((elt) => elt.id == id);
    this.setState({ inputValue: todo.task, todoEdit: todo });

    this.deleteTodo(todo.id);
  };

  editCheck = (id, check) => {
    const datas = this.state.todos.slice();
    datas.forEach((elt) => {
      if (elt.id === id) elt.isDone = check;
    });
    this.setState({ todos: datas }, () =>
      this.setLocalStorage(TODOLIST, datas)
    );
    console.log(datas);
  };

  setLocalStorage = (key, element) =>
    localStorage.setItem(key, JSON.stringify(element));
  getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-10 mt-5">
            <h1 className="text-capitalize text-center">Ma TodoList</h1>
            <Form addTodo={this.addTodo} inputEdit={this.state.inputValue} />
            {this.listTodo()}
          </div>
        </div>

        {/* <div className="row">
          <Form addTodo={this.addTodo} inputEdit={this.state.inputValue} />
        </div> */}
      </div>
    );
  }
}
export default TodoList;
