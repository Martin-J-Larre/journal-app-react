//! Config Firebase should not be with .env file
//! it have to be direct the credentials for run this test
import { signWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
  chechingAuthentication,
  startGoogleSignIn,
} from "../../../src/store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Test on auth/thunks.js", () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("should invoke checkingCredentials()", async () => {
    await chechingAuthentication()();

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials);
  });

  test("startGoogleSignIn should call checkingCredentials() and login()", async () => {
    const loginData = { ok: true, ...demoUser };
    await signWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn should call checkingCredentials() and logout()", async () => {
    const loginData = { ok: false, errorMessage: "A Google message error" };
    await signWithGoogle.mockResolvedValue(loginData);
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });
});
