import { UserContext } from "./UserContext";

const user = {
  id: 123,
  name: "Name",
  email: "email",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
