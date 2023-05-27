import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { AuthSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    preloadedState: {
      auth: notAuthenticatedState,
    },
  },
});

describe("Test on LoginPage.jsx", () => {
  test("should show component correctly ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
    expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
  });

  test("Button Google should call startGoogleSignIn()", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText("google-btn");
    fireEvent.click(googleBtn);
  });
});
