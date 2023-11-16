import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (interation = 100) => {
  for (let i = 0; i < interation; i++) {
    console.log("interarion");
  }
  return `${interation} interaciones realizadas`;
};

export const MemoHook = () => {
  const { counter, incrementCounter } = useCounter(100);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => incrementCounter()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
