import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Form = (props) => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (event) => setInputValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      props.addTodo(inputValue);
    }
  };
  const add = (event) => {
    event.preventDefault();
    props.addTodo(inputValue);
  };

  return (
    <form>
      <div className="row">
        <div className="col-10">
          <Input
            placeholder="Ajouter un todo"
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </div>
        <div className="col-2">
          <Button onClick={add} size="medium" primary={true} label="Ajouter" />
        </div>
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
