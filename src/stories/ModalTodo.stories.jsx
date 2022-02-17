import React from "react";
import ModalTodo from "../components/ModalTodo";

export default {
  title: "Components/ModalTodo",
  component: ModalTodo,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <ModalTodo {...args} />;

export const EditModal = Template.bind({});
EditModal.args = {
  modalContent: {
    title: "Modification",
    bntLabel: "Modifier",
  },
  actionBtn: null,
};

export const DeleteModal = Template.bind({});
DeleteModal.args = {
  modalContent: {
    title: "Suppression de la todo",
    content: "Voulez vous vraiment supprimer ce todo?",
    bntLabel: "Oui",
  },
  actionBtn: null,
};
