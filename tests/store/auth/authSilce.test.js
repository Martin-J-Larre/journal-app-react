import { AuthSlice } from "../../../src/store/auth/authSlice";
import { initialState } from "../../fixtures/authFixtures";

describe("Test on authSlice.js", () => {
  test("should return a initialSate", () => {
    const state = AuthSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("should return a initialSate named 'auth'", () => {
    expect(AuthSlice.name).toBe("auth");
  });
});
