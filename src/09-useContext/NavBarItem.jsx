import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBarItem = ({ route }) => {
  return (
    <li className="d-block">
      <Link to={route.path}>{route.name}</Link>
    </li>
  );
};
NavBarItem.propTypes = {
  route: PropTypes.object.isRequired,
};
