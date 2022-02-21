import React from "react";
import ModalTodo from "../components/ModalTodo";
import { Modal } from "react-bootstrap";
import Button from "../components/Button";

export default {
  title: "Components/ModalTodo",
  component: ModalTodo,
  argTypes: {
    modalContent: {
      bntLabel: { control: "text" },
      title: { control: "text" },
    },
  },
};

const Template = (args) => <ModalTodo {...args} />;

export const EditModal = Template.bind({});
EditModal.args = {
  modalContent: {
    title: "Modification",
    bntLabel: "Modifier",
  },
  typeofModal: "edit",
  show: false,
  actionBtn: null,
};
