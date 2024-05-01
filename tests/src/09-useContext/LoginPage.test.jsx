import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../../src/09-useContext/LoginPage";
import { useContext } from "react";

useContext;

describe("Test on <LoginPage />", () => {
  test("should show the component without the user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const preElHTML = screen.getByLabelText("pre");
    expect(preElHTML.innerHTML).toBe("null");
  });

  test("should to call setUser", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const btnElHTML = screen.getByRole("button");
    fireEvent.click(btnElHTML);

    expect(setUserMock).toHaveBeenCalledWith({
      email: "email@email.com",
      id: 123,
      name: "name",
    });
  });
});
