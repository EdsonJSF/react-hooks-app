import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://rickandmortyapi.com/api/character/1"
  );

  console.log(hasError);

  const { name, origin, image } = data;

  return (
    <>
      <h1>MultipleCustomHooks</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote d-flex justify-content-end align-items-end gap-3">
          <img src={image} alt={name + "image"} width="100" />
          <div className="">
            <p>{name}</p>
            <footer className="blockquote-footer">{origin.name}</footer>
          </div>
        </blockquote>
      )}
    </>
  );
};
