import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Test on useCounter", () => {
  const counterValue = 100;

  test("should resturn default values", () => {
    const { result } = renderHook(() => useCounter());

    const { counter, decrementCounter, incrementCounter, resetCounter } =
      result.current;

    expect(counter).toBe(10);
    expect(decrementCounter).toEqual(expect.any(Function));
    expect(incrementCounter).toEqual(expect.any(Function));
    expect(resetCounter).toEqual(expect.any(Function));
  });

  test(`should to generate the counter with value in ${counterValue}`, () => {
    const { result } = renderHook(() => useCounter(counterValue));

    const { counter } = result.current;

    expect(counter).toBe(counterValue);
  });

  test("should incremente the counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));

    const { incrementCounter } = result.current;

    act(() => {
      incrementCounter();
      incrementCounter(2);
    });

    expect(result.current.counter).toBe(counterValue + 3);
  });

  test("should decremente the counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));

    const { decrementCounter } = result.current;

    act(() => {
      decrementCounter();
      decrementCounter(2);
    });

    expect(result.current.counter).toBe(counterValue - 3);
  });

  test("should reset the counter", () => {
    const { result } = renderHook(() => useCounter(counterValue));

    const { incrementCounter, resetCounter } = result.current;

    act(() => {
      incrementCounter();
      incrementCounter();
      incrementCounter();
      resetCounter();
    });

    expect(result.current.counter).toBe(counterValue);
  });
});
