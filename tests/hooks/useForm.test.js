import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Test on useForm", () => {
  const initialForm = {
    name: "name",
    pass: "pass",
  };

  test("should return default object", () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      name: initialForm.name,
      pass: initialForm.pass,
      formState: initialForm,
      handleInput: expect.any(Function),
      handleResetForm: expect.any(Function),
    });
  });

  test("should change the name property in the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInput } = result.current;

    const target = {
      name: "name",
      value: "1",
    };

    act(() => {
      handleInput({ target });
    });

    expect(result.current.name).toBe(target.value);
    expect(result.current.formState.name).toBe(target.value);
  });

  test("should reset the name property in the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInput, handleResetForm } = result.current;

    const target = {
      name: "name",
      value: "1",
    };

    act(() => {
      handleInput({ target });
      handleResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
