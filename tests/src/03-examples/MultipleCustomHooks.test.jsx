import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../src/hooks/useFetch";

jest.mock("../../../src/hooks/useFetch.js");

describe("Test on MultipleCustomHooks", () => {
  test("should show the default component", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("MultipleCustomHooks"));

    const nextBtn = screen.getByRole("button", { name: "Next" });

    expect(nextBtn.disabled).toBe(true);
  });

  test("should show a Quote", () => {
    useFetch.mockReturnValue({
      data: { name: "test", image: "urlimage", origin: { name: "origin" } },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    expect(screen.getByText("test")).toBeTruthy();
    expect(screen.getByText("origin")).toBeTruthy();

    const img = screen.getByRole("img");
    expect(img.src).toContain("urlimage");

    const nextBtn = screen.getByRole("button", { name: "Next" });

    expect(nextBtn.disabled).toBeFalsy();
  });
});
