import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, type, placeholder, required, className, ...props }) => {
  return (
    <div className="card card-body my-3">
      <form>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white h-100">
              <i className="fas fa-book"></i>
            </div>
          </div>
          <input
            value={value}
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : ""}
            className={className ? className : "form-control"}
            required={required ? required : false}
            onChange={props.onChange ? (event) => props.onChange(event) : null}
            onKeyDown={
              props.onKeyDown ? (event) => props.onKeyDown(event) : null
            }
            {...props}
          />
        </div>
      </form>
    </div>
  );
};

Input.propTypes = {
  /**
   *  La valeur de l'input
   */
  value: PropTypes.string,
  /**
  /**
   *  Le type de l'input il est  optionnel (par defaut c'est un type text)
   */
  type: PropTypes.oneOf(["email", "number", "text"]),
  /**
   * Le placeholder de l'input il est  optionnel
   */
  placeholder: PropTypes.string,
  /**
   * Si l'input est requis ou pas, il est  optionnel (par defaut c'est false)
   */
  required: PropTypes.bool,
  /**
   * Une class Boostrap
   */

  className: PropTypes.string,
  /**
   * La fonction de trackage des valeurs
   */

  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: "text",
  required: false,
  placeholder: "",
  className: "form-control",
  onChange: null,
};

export default Input;
