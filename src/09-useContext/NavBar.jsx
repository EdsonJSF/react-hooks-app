import { NavBarItem } from "./NavBarItem";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/login",
    name: "Login",
  },
];

export const NavBar = () => {
  return (
    <nav>
      <ul className="d-flex gap-2 p-0">
        {routes.map((route) => (
          <NavBarItem key={route.path} route={route} />
        ))}
      </ul>
    </nav>
  );
};
