import { render, fireEvent } from "@testing-library/react";
import Input from "./";

describe("Input", () => {
  test("Input text", () => {
    const handleChange = jest.fn();
    const { container } = render(<Input type="text" onChange={handleChange} />);
    const input = container.firstChild;
    fireEvent.change(input, { target: { value: "salut" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("salut");
  });
});
