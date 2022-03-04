import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Card, Form } from "react-bootstrap";
import ModalTodo from "../ModalTodo";

const ListItem = ({ deleteTodo, editCheck, item, ...props }) => {
  const [showE, setShowE] = useState(false);
  const [showD, setShowD] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "Modification",
    btnLabel: "Modifier",
  });
  const [inputValue, setInputValue] = useState(item.task);

  const handleClose = () => {
    if (showE) setShowE(false);
    if (showD) setShowD(false);
  };
  const handleShowE = (content) => {
    setModalContent(content);
    setShowE(true);
  };
  const handleShowD = (content) => {
    setModalContent(content);
    setShowD(true);
  };

  const onChange = (event) => setInputValue(event.target.value);

  const editTodo = () => {
    item.task = inputValue;
    item.hour = `${new Date().getHours()}:${new Date().getMinutes()}`;
    item.date = new Date().toLocaleDateString();

    handleClose();
    props.saveChange(item);
    setModalContent("");
  };

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
              onClick={() =>
                handleShowE({
                  title: "Modification",
                  btnLabel: "Modifier",
                })
              }
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </div>
        <div className="col-1">
          <i
            className="far fa-trash-alt text-danger"
            onClick={() =>
              handleShowD({
                title: "Suppression de la todo",
                content: "Voulez vous vraiment supprimer ce todo?",
                btnLabel: "Oui",
              })
            }
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </Card.Body>

      <ModalTodo
        show={showE}
        closeModal={handleClose}
        modalContent={modalContent}
        typeofModal="edit"
        inputValue={inputValue}
        onChange={onChange}
        actionBtn={() => editTodo(item.id)}
      />

      <ModalTodo
        show={showD}
        closeModal={handleClose}
        modalContent={modalContent}
        typeofModal="simple"
        actionBtn={deleteTodo}
      />
    </Card>
  );
};

ListItem.propTypes = {
  /**
   * Elle contient les infos par rapport au todo
   *  Id du todo
   * Le contenu du todo
   *  L'etat du todo si c'est fait ou pas
   */
  item: PropTypes.shape({
    id: PropTypes.number,
    task: PropTypes.string,
    isDone: PropTypes.bool,
    date: PropTypes.string,
    hour: PropTypes.string,
  }),
  /**
   *La fonction pour l'edit
   */
  editTodo: PropTypes.func,
  /**
   * Supprimer un todo
   */
  deleteTodo: PropTypes.func,
};

ListItem.defaultProps = {
  item: {
    task: "todo text",
    isDone: false,
    hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
    date: new Date().toLocaleDateString(),
  },
  deleteTodo: undefined,
};

export default ListItem;
