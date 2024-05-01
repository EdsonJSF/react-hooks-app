import { render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { HomePage } from "../../../src/09-useContext/HomePage";

describe("Test on <HomePage />", () => {
  const user = {
    id: 1,
    name: "user",
  };

  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElHTML = screen.getByLabelText("pre");
    expect(preElHTML.innerHTML).toBe("null");
  });

  test("should show the component with the user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );

    const preElHTML = screen.getByLabelText("pre");
    expect(preElHTML.innerHTML).toBe(JSON.stringify(user));
  });
});
