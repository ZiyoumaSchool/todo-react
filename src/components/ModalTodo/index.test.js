import { render, fireEvent } from "@testing-library/react";
import ModalTodo from "./";

describe("ModalTodo", () => {
  it("render form", () => {
    render(<ModalTodo />);
  });
});
