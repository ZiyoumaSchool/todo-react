import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import PropTypes from "prop-types";

const Form = ({ inputEdit, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputTime, setInputTime] = useState("");
  useEffect(() => {
    setInputValue(inputEdit);
  }, [inputEdit]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.addTodo(inputValue);
      setInputValue("");
    }
  };
  const add = (event) => {
    event.preventDefault();
    props.addTodo(inputValue);
    setInputValue("");
  };

  return (
    <div className="card card-body my-3">
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text bg-primary text-white h-100">
            <i className="fas fa-book"></i>
          </div>
        </div>
        <Input
          placeholder="Ajouter un todo - Appuyer sur Entrée"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
          value={inputValue}
          name="task"
        />
        <Input
          onChange={(e) => setInputDate(e.target.value)}
          onKeyDown={onKeyDown}
          value={inputDate}
          type="date"
          name="todoDate"
        />
        <Input
          onChange={(e) => setInputTime(e.target.value)}
          onKeyDown={onKeyDown}
          value={inputTime}
          type="time"
          name="todoTime"
        />
        <Button onClick={add} size="medium" primary={true} label="Ajouter" />
      </div>
    </div>
  );
};
Form.propTypes = {
  /**
   *  L'action qui suit l'appui sur la touche Entrée
   */
  onKeyDown: PropTypes.func,
  /**
   * Utile réelement lors de la modification
   */
  value: PropTypes.string,
  /**
   * L'action qui suit l'appui sur le boutton
   */
  onClick: PropTypes.func,
};

export default Form;
