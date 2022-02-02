import React from "react";
import ListItem from "../components/ListItem";

export default {
  title: "Components/Listitem",
  component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const ListTodo = Template.bind({});
