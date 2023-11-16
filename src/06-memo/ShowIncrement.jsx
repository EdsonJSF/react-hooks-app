import PropTypes from "prop-types";

export const ShowIncrement = ({ increment }) => {
  console.log("me ejecute");

  return (
    <button className="btn btn-primary" onClick={() => increment()}>
      Increment
    </button>
  );
};

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
