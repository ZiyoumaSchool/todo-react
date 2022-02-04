import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = ({ inputEdit, ...props }) => {
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    setInputValue(inputEdit);
  }, [inputEdit]);

  const onChange = (event) => setInputValue(event.target.value);

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
    <form>
      <div className="row">
        <div className="col">
          <Input
            placeholder="Ajouter un todo"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={inputValue}
          />
        </div>
        {/* <div className="col-2">
          <Button onClick={add} size="medium" primary={true} label="Ajouter" />
        </div> */}
      </div>
    </form>
  );
};
// Header.propTypes = {
//     user: PropTypes.shape({}),
//     onLogin: PropTypes.func.isRequired,
//     onLogout: PropTypes.func.isRequired,
//     onCreateAccount: PropTypes.func.isRequired,
//   };

//   Header.defaultProps = {
//     user: null,
//   };

export default Form;
