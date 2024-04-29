import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../src/hooks/useCounter";
import { useFetch } from "../../../src/hooks/useFetch";

jest.mock("../../../src/hooks/useCounter.js");
jest.mock("../../../src/hooks/useFetch.js");

describe("Test on MultipleCustomHooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    incrementCounter: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  test("should to call increment function", () => {
    useFetch.mockReturnValue({
      data: { name: "test", image: "urlimage", origin: { name: "origin" } },
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);

    const nextBtn = screen.getByRole("button", { name: "Next" });

    fireEvent.click(nextBtn);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
