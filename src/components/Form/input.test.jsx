import { render, fireEvent } from "@testing-library/react";
import Form from "./";

describe("Form", () => {
  it("render form", () => {
    render(<Form withButton={true} />);
  });
});
