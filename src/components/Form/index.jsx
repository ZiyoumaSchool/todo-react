import React, { useState, useEffect } from "react";
import Input from "../Input";
import Button from "../Button";
import PropTypes from "prop-types";
import moment from "moment";

const Form = ({ datas, withButton, actionBtn, ...props }) => {
  const [inputTask, setInputTask] = useState("");
  const [inputDate, setInputDate] = useState(
    new Date().toLocaleDateString("en-CA")
  );
  const [inputTime, setInputTime] = useState(
    `${new Date().toLocaleTimeString("fr-FR", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    })}`
  );

  useEffect(() => {
    if (withButton === false) {
      setInputTask(datas.task);
      setInputTime(datas.hour);
      setInputDate(new Date(datas.date).toLocaleDateString("en-CA"));
    }
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const todo = {
        task: inputTask,
        date: moment(inputDate).format("DD/MM/YYYY"),
        hour: inputTime,
      };
      props.addTodo(todo);
      setInputTask("");
    }
  };

  const add = (event) => {
    event.preventDefault();
    const todo = {
      task: inputTask,
      date: inputDate,
      hour: inputTime,
    };
    actionBtn(todo);
    setInputTask("");
  };

  return (
    <div className="card card-body my-3">
      <div className="input-group">
        {withButton ? (
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white h-100">
              <i className="fas fa-book"></i>
            </div>
          </div>
        ) : (
          ""
        )}

        <Input
          placeholder="Ajouter un todo - Appuyer sur Entrée"
          onChange={(e) => {
            setInputTask(e.target.value);
            if (withButton === false) props.setEditTask(e.target.value);
          }}
          onKeyDown={onKeyDown}
          value={inputTask}
          style={{ width: 30 + " % !important" }}
        />
        <Input
          onChange={(e) => {
            setInputDate(e.target.value);
            if (withButton === false) props.setEditDate(e.target.value);
          }}
          onKeyDown={onKeyDown}
          value={inputDate}
          type="date"
        />
        <Input
          onChange={(e) => {
            setInputTime(e.target.value);
            if (withButton === false) props.setEditTime(e.target.value);
          }}
          onKeyDown={onKeyDown}
          value={inputTime}
          type="time"
        />
        {withButton === true ? (
          <Button onClick={add} size="medium" primary={true} label="Ajouter" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
Form.propTypes = {
  /**
   * Present uniquement s'il s'agit d'un formulaire pour
   */
  datas: PropTypes.shape({
    task: PropTypes.string,
    date: PropTypes.string,
    hour: PropTypes.string,
  }),
  /**
   * Pour modifier le todo
   */
  setEditTask: PropTypes.func,
  /**
   * Pour modifier la date
   */
  setEditDate: PropTypes.func,
  /**
   *  Pour modifier l'heure
   */
  setEditTime: PropTypes.func,
  /**
   *  Si le formulaire a un boutton ou non
   */
  withButton: PropTypes.bool.isRequired,
  /**
   *  L'action qui suit l'appui sur la touche Entrée
   */
  onKeyDown: PropTypes.func,
  /**
   * L'action qui suit l'appui sur le boutton
   */
  actionBtn: PropTypes.func,
};
Form.defaultProps = {
  actionBtn: null,
  setEditTask: null,
  setEditDate: null,
  setEditTime: null,
};
export default Form;
