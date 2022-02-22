import React from "react";
import ListItem from "../components/ListItem";
import { Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default {
  title: "Components/Listitem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const ListTodo = Template.bind({});
ListTodo.args = {};
