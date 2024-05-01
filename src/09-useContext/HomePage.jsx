import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const HomePage = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre aria-label="pre">{JSON.stringify(user)}</pre>

      <MultipleCustomHooks />
    </>
  );
};
