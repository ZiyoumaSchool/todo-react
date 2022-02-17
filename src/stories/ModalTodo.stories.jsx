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

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
