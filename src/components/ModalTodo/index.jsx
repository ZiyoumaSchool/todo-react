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
   *  Le type de modal on peut avoir le modal pour la modification d'une todo, de la suppression d'un todo ou autre encore ...
   */
  typeofModal: PropTypes.oneOf(["simple", "edit"]),
  /**
   * La description des champs du label
   */
  modalContent: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    btnLabel: PropTypes.string,
  }),
  /**
   * La fonction qui permet de fermer le modal
   */
  closeModal: PropTypes.func,
  /**
   * L'action qui suivra le boutton a cote de fermer
   */
  actionBtn: PropTypes.func,
};

ModalTodo.defaultProps = {
  show: false,
  actionBtn: null,
  modalContent: {
    title: "Modal",
    content: "Préciser le texte a afficher ici, s'il en a",
    btnLabel: "Action",
  },
};

export default ModalTodo;
