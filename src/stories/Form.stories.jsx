import React from "react";
import Form from "../components/Form";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Addtodo = Template.bind({});
Addtodo.args = {
  datas: {
    task: "Ma tache",
    date: new Date().toLocaleDateString("en-CA"),
    hour: new Date().toLocaleTimeString("fr-FR", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    }),
  },
  setEditTask: (val) => {
    console.log(val);
  },

  setEditDate: (val) => {
    console.log(val);
  },
  setEditTime: (val) => {
    console.log(val);
  },
  withButton: false,
};
