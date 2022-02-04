import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";

const ListItem = ({ id, isDone, task, ...props }) => {
  const [check, setCheck] = useState(isDone);
  const deleteTodo = () => props.deleteTodo(id);

  const editTodo = () => props.editTodo(id);
  const editCheck = (e) => {
    setCheck(e.target.checked);
    props.editCheck(id, e.target.checked);
  };

  return (
    <Card style={{ margin: "10px 0" }} className="col">
      <Card.Body className="row">
        <div className="col-1">
          {" "}
          <Form>
            <Form.Check
              defaultChecked={isDone}
              type="switch"
              id="disabled-custom-switch"
              onChange={(e) => editCheck(e)}
            />
          </Form>
        </div>
        <div className="col-9 ">
          <Card.Text>
            {check === true ? (
              <s>{task}</s>
            ) : (
              <React.Fragment>{task}</React.Fragment>
            )}
          </Card.Text>
        </div>
        <div className="col-1">
          <i
            className="far fa-edit text-primary"
            onClick={editTodo}
            style={{ cursor: "pointer" }}
          ></i>
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

  onClick: PropTypes.func,
};

ListItem.defaultProps = {
  task: "todo text",
  isDone: false,
};

export default ListItem;
