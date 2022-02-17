import { Modal } from "react-bootstrap";
import React, { useState, Fragment } from "react";
import Button from "../Button";
import Input from "../Input";

const ModalTodo = ({
  show,
  editTodo,
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
          <Button onClick={closeModal} size="medium" label="Fermer" />
          <Button
            onClick={editTodo}
            size="medium"
            primary={true}
            label="Ajouter"
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTodo;
