import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter();

  return (
    <>
      <h1>CounterWithCustomHook: {counter}</h1>
      <hr />
      <button className="btn btn-outline-success" onClick={() => incrementCounter()}>
        +1
      </button>
      <button className="btn btn-primary" onClick={resetCounter}>
        Reset
      </button>
      <button className="btn btn-outline-danger" onClick={() => decrementCounter()}>
        -1
      </button>
    </>
  );
};
