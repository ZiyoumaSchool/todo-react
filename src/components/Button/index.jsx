import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   *  Le boutton prend la couleur principale de l'applicationo
   */
  primary: PropTypes.bool,
  /**
   * La couleur que le boutton doit prendre
   */
  backgroundColor: PropTypes.string,
  /**
   * La taille souhaité
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Le label du boutton (le texte)
   */
  label: PropTypes.string.isRequired,
  /**
   * L'action
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
export default Button;
