import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const initialCounter = 1;

  const { counter, incrementCounter, decrementCounter, resetCounter } =
    useCounter(initialCounter);

  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote d-flex justify-content-end align-items-end gap-3">
          <img src={data?.image} alt={data?.name + "image"} width="100" />
          <div className="">
            <p>{data?.name}</p>
            <footer className="blockquote-footer">{data?.origin.name}</footer>
          </div>
        </blockquote>
      )}

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary"
          disabled={isLoading || counter <= initialCounter}
          onClick={() => decrementCounter()}
        >
          Back
        </button>

        <button
          className="btn btn-primary"
          disabled={isLoading || counter === initialCounter}
          onClick={() => resetCounter()}
        >
          Restart
        </button>

        <button
          className="btn btn-primary"
          disabled={isLoading}
          onClick={() => incrementCounter()}
        >
          Next
        </button>
      </div>
    </>
  );
};
