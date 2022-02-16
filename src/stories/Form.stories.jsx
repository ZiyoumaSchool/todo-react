import React from "react";
import Form from "../components/Form";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Addtodo = Template.bind({});
