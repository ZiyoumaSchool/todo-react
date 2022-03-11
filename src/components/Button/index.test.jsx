import Button from "./";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Test class", () => {
    render(<Button label="Button" primary={true} />);
    const primaryButton = screen.getByRole("button", { label: /Button/i });
    expect(primaryButton).toHaveClass("button--primary");
  });
});
