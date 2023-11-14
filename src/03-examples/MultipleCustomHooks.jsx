import { Loading, RickMortyBlockquote } from "../components";
import { useCounter, useFetch } from "../hooks";

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

      {isLoading ? <Loading /> : <RickMortyBlockquote data={!!data && data} />}

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
