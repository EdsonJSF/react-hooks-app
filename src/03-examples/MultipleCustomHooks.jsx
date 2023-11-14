import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading } = useFetch(
    "https://rickandmortyapi.com/api/character/1"
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
    </>
  );
};
