import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";

describe("Test on MultipleCustomHooks", () => {
  test("should show the default component", () => {
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("MultipleCustomHooks"));

    const nextBtn = screen.getByRole("button", { name: "Next" });

    expect(nextBtn.disabled).toBe(true);
  });
});
