import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "test",
    email: "test@test.test",
  });

  const { username, email } = formState;

  const handleInput = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    return () => {
      console.log("useEffect");
    };
  });

  return (
    <>
      <h1>SimpleForm</h1>

      <hr />

      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="Username"
        value={username}
        onChange={handleInput}
      />

      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="example@web.com"
        value={email}
        onChange={handleInput}
      />
    </>
  );
};
