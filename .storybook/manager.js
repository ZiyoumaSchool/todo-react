import { create } from "@storybook/theming/create";
import { addons } from "@storybook/addons";

const theme = create({
  base: "light",
  brandTitle: "TodoList",
  brandUrl: "/",
});

addons.setConfig({ theme });
