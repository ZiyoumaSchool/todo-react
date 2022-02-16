import React from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";

const ListItem = ({ deleteTodo, editTodo, editCheck, item, ...props }) => {
  return (
    <Card style={{ margin: "10px 0" }} className="col">
      <Card.Body className="row">
        <div className="col-1">
          {" "}
          <Form>
            <Form.Check
              defaultChecked={item.isDone}
              value={item.isDone}
              type="switch"
              id="disabled-custom-switch"
              onChange={(e) => editCheck(e)}
            />
          </Form>
        </div>
        <div className="col-4">
          <Card.Text>
            {item.isDone === true ? (
              <s style={{ color: "red" }}>{item.task}</s>
            ) : (
              <React.Fragment>{item.task} </React.Fragment>
            )}
          </Card.Text>
        </div>
        <div className="col-4">
          <i className="dating">
            {item.hour}-{item.date}
          </i>
        </div>
        <div className="col-1">
          {item.isDone === true ? (
            <i
              className="far fa-edit text-primary"
              disabled
              style={{ cursor: "no-drop" }}
            ></i>
          ) : (
            <i
              className="far fa-edit text-primary"
              onClick={editTodo}
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </div>
        <div className="col-1">
          <i
            className="far fa-trash-alt text-danger"
            onClick={deleteTodo}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </Card.Body>
    </Card>
  );
};

ListItem.propTypes = {
  /**
   *  Id du todo
   */
  id: PropTypes.number,
  /**
   *  Le contenu du todo
   */
  task: PropTypes.string,
  /**
   * L'etat du todo si c'est fait ou pas
   */
  isDone: PropTypes.bool,
  /**
   * Modifier un todo
   */
  editTodo: PropTypes.func,
  /**
   * Supprimer un todo
   */
  deleteTodo: PropTypes.func,
};

ListItem.defaultProps = {
  task: "todo text",
  isDone: false,
  deleteTodo: undefined,
  hour: null,
  date: null,
};

export default ListItem;
