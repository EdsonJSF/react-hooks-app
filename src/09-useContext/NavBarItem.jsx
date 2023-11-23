import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const NavBarItem = ({ route }) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        to={route.path}
      >
        {route.name}
      </NavLink>
    </li>
  );
};
NavBarItem.propTypes = {
  route: PropTypes.object.isRequired,
};
