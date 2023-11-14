import PropTypes from "prop-types";

export const RickMortyBlockquote = ({ data }) => {
  return (
    <blockquote className="blockquote d-flex justify-content-end align-items-end gap-3">
      <img src={data.image} alt={data.name + "image"} width="100" />
      <div className="">
        <p>{data.name}</p>
        <footer className="blockquote-footer">{data.origin.name}</footer>
      </div>
    </blockquote>
  );
};

RickMortyBlockquote.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    origin: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};
