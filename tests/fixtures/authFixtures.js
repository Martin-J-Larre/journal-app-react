export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "authenticated",
  uid: "123QWE",
  email: "test@Mail.com",
  displayName: "Test User",
  photoURL: "https://demotest.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "not-authenticated",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: "QWE123",
  email: "demouser@mail.com",
  displayName: "Demo user",
  photoURL: "https://demouser.jpg",
};
