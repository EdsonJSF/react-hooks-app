import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, handleInput } = useForm({
    username: "test",
    email: "test@test.test",
    password: "",
  });

  const { username, email, password } = formState;

  return (
    <>
      <h1>FormWithCustomHook</h1>

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

      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="password"
        value={password}
        onChange={handleInput}
      />
    </>
  );
};
