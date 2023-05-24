import {
  AuthSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Test on authSlice.js", () => {
  test("should return a initialSate", () => {
    const state = AuthSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("should return a initialSate named 'auth'", () => {
    expect(AuthSlice.name).toBe("auth");
  });

  test("should do authentication", () => {
    const state = AuthSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: "autheticated",
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null,
    });
  });

  test("should do logout", () => {
    const state = AuthSlice.reducer(authenticatedState, logout());

    expect(state).toEqual({
      status: "No-Authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("should do logout and show a error message", () => {
    const errorMessage = "Data is not correct";

    const state = AuthSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );

    expect(state).toEqual({
      status: "No-Authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage,
    });
  });

  test("should change the state to checking", () => {
    const state = AuthSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe("checking");
  });
});
