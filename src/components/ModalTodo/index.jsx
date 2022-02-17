import { Modal } from "react-bootstrap";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import Input from "../Input";

const ModalTodo = ({
  show,
  closeModal,
  modalContent,
  typeofModal,
  data,
  inputValue,
  onChange,
  ...props
}) => {
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {typeofModal === "simple" ? (
            <Fragment>{modalContent.content}</Fragment>
          ) : (
            <Fragment>
              <Input value={inputValue} onChange={onChange} />
            </Fragment>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal} size="medium" label="Annuler" />
          <Button
            onClick={props.actionBtn}
            size="medium"
            primary={true}
            label={modalContent.btnLabel}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalTodo.propTypes = {
  /**
   *  La variable qui nous permet de savoir si le modal est actif ou pas
   */
  show: PropTypes.bool,
  /**
   * La couleur que le boutton doit prendre
   */
  backgroundColor: PropTypes.string,
  /**
   * La description des champs du label
   */
  modalContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    btnLabel: PropTypes.string.isRequired,
  }),
  /**
   * L'action qui suivra le boutton a cote de fermer
   */
  actionBtn: PropTypes.func,
};

export default ModalTodo;
