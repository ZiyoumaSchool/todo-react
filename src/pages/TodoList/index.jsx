import React, { Component } from "react";
import Form from "../../components/Form";
import ListItem from "../../components/ListItem";
import { FirebaseContext } from "../../components/Firebase";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { Dropdown } from "react-bootstrap";
import "./todoList.css";

const TODOLIST = "TODO_LIST";
const TODOUSERS = "TODO_USERS";

class TodoList extends Component {
  state = {
    inputValue: "",
    todos: [],
    isAuth: false,
    user: {},
    clientId:
      "859857546300-p9dnpvho05nsqacerea9a8npffg611o5.apps.googleusercontent.com",
  };

  componentDidMount() {
    const datas = this.getLocalStorage(TODOLIST);
    const user = this.getLocalStorage(TODOUSERS);

    if (user != null) {
      this.context
        .findDocument(user.id)
        .then((querySnapshot) => {
          querySnapshot.forEach((element) => {
            var data = element.data();
            this.setState({ todos: data.todos });
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.setState({ user, isAuth: true });
    } else if (datas != null) this.setState({ todos: datas });
  }

  addTodo = (todo) => {
    if (todo.task !== "") {
      const change = [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          isDone: false,
          task: todo.task,
          hour: todo.hour,
          date: todo.date,
        },
      ];
      this.saveInDB(change);
    }
  };

  listTodo = () =>
    this.state.todos.map((item) => (
      <div className="row mx-2" key={item.id}>
        <ListItem
          item={item}
          deleteTodo={() => this.deleteTodo(item.id)}
          saveChange={this.saveChange}
          editCheck={() => this.editCheck(item.id)}
        />
      </div>
    ));

  deleteTodo = (id) => {
    const save = [];
    this.state.todos.forEach((elt, index) => {
      if (elt.id !== id) save.push(elt);
    });

    this.saveInDB(save);
  };

  saveChange = (item) => {
    const save = this.state.todos.slice();
    save.forEach((elt) => {
      if (elt.id === item.id) elt = item;
    });
    this.saveInDB(save);
  };

  saveInDB = (todos) => {
    if (this.state.isAuth)
      this.context.user(this.state.user.id).update({ todos: todos });
    else this.setLocalStorage(TODOLIST, todos);

    this.setState({
      inputValue: "",
      todos: todos,
    });
  };

  editCheck = (id) => {
    const datas = this.state.todos.slice();

    datas.forEach((elt) => {
      if (elt.id === id) elt.isDone = !elt.isDone;
    });
    this.saveInDB(datas);
  };

  setLocalStorage = (key, element) =>
    localStorage.setItem(key, JSON.stringify(element));

  getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

  removeItem = (key) => localStorage.removeItem(key);

  responseGoogle = (response) => {
    const user = {
      id: response.profileObj.googleId,
      email: response.profileObj.email,
      familyName: response.profileObj.familyName,
      givenName: response.profileObj.givenName,
      imageUrl: response.profileObj.imageUrl,
      name: response.profileObj.name,
    };

    this.context
      .getDb()
      .doc(response.profileObj.googleId)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.exists) {
          this.context.findDocument(user.id).then((querySnapshot) => {
            querySnapshot.forEach((element) => {
              var data = element.data();
              this.setState({ user, isAuth: true, todos: data.todos });
            });
          });
        } else {
          this.context.user(user.id).set({ ...user, todos: this.state.todos });
          this.setState({ user, isAuth: true, todos: [] });
        }
        this.setLocalStorage(TODOUSERS, user);
      });
  };

  responseGoogleEchec = (response) => {
    console.log(response);
  };

  logOut = () => {
    this.setState({ user: {}, isAuth: false, todos: [] });
    this.removeItem(TODOUSERS);
    const datas = this.getLocalStorage(TODOLIST);
    if (datas != null) this.setState({ todos: datas });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-11"></div>
          <div className="col-1" style={{ marginTop: "25px" }}>
            <div className="logo-textL">
              {this.state.isAuth ? (
                <Dropdown className="logoSpace dropdown">
                  <Dropdown.Toggle>
                    <img
                      src={this.state.user.imageUrl}
                      className="img-xs image imgB"
                      width={50}
                      height={50}
                      alt="User  profile"
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      {this.state.user !== "" ? (
                        <div className="centerContent">
                          {this.state.user.givenName.toUpperCase()}
                        </div>
                      ) : null}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <GoogleLogout
                        clientId="859857546300-p9dnpvho05nsqacerea9a8npffg611o5.apps.googleusercontent.com"
                        buttonText="Déconnexion"
                        render={(renderProps) => (
                          <React.Fragment onClick={renderProps.onClick}>
                            Déconnexion
                          </React.Fragment>
                        )}
                        onLogoutSuccess={this.logOut}
                      ></GoogleLogout>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <GoogleLogin
                  clientId={this.state.clientId}
                  buttonText="Connexion"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogleEchec}
                  cookiePolicy={"single_host_origin"}
                />
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-10 mx-auto col-md-10 mt-5">
            <h1 className="text-capitalize text-center">Ma TodoList</h1>
            <Form
              actionBtn={this.addTodo}
              inputEdit={this.state.inputValue}
              withButton={true}
            />
            {this.listTodo()}
          </div>
        </div>
      </div>
    );
  }
}
TodoList.contextType = FirebaseContext;
export default TodoList;
