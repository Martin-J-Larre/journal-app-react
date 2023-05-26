//! Config Firebase should not be with .env file
//! it have to be direct the credentials for run this test
// import {
//   loginWithEmailPassword,
//   logoutFirebase,
//   signWithGoogle,
// } from "../../../src/firebase/providers";
// import { checkingCredentials, login, logout } from "../../../src/store/auth";
// import {
//   chechingAuthentication,
//   startGoogleSignIn,
//   startLoginWithEmailPassword,
//   startLogout,
// } from "../../../src/store/auth/thunks";
// import { clearNotesLogout } from "../../../src/store/journal";
// import { demoUser } from "../../fixtures/authFixtures";

// jest.mock("../../../src/firebase/providers");

describe("Test on auth/thunks.js", () => {
  // const dispatch = jest.fn();
  // beforeEach(() => jest.clearAllMocks());

  // test("should invoke checkingCredentials()", async () => {
  //   await chechingAuthentication()();

  //   expect(dispatch).toHaveBeenCalledWith(checkingCredentials);
  // });

  test("startGoogleSignIn should call checkingCredentials() and login()", async () => {
    // const loginData = { ok: true, ...demoUser };
    // await signWithGoogle.mockResolvedValue(loginData);
    // await startGoogleSignIn()(dispatch);
    // expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    // expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test("startGoogleSignIn should call checkingCredentials() and logout()", async () => {
    // const loginData = { ok: false, errorMessage: "A Google message error" };
    // await signWithGoogle.mockResolvedValue(loginData);
    // await startGoogleSignIn()(dispatch);
    // expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    // expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWithEmailPassword should call checkingCredentials() and login()", async () => {
    // const loginData = { ok: true, ...demoUser };
    // const formData = { email: demoUser.email, password: "123456" };
    // await loginWithEmailPassword.mockResolvedValue(loginData);
    // await startLoginWithEmailPassword(formData)(dispatch);
    // expect(dispatch).toHaveBeenLastCalledWith(checkingCredentials());
    // expect(dispatch).toHaveBeenLastCalledWith(login(loginData));
  });

  test("startlogout should call logoutFrebase() and clearNotesLogout() ", async () => {
    // await startLogout()(dispatch);
    // expect(logoutFirebase).toHaveBeenCalled();
    // expect(dispatch).toHaveBeenCalledWith(clearNotesLogout);
  });
});
