export const initialState = {
  status: "checking",
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: "autheticated",
  uid: "QWE123",
  email: "demouser@mail.com",
  displayName: "Demo user",
  photoURL: "https://demouser.jpg",
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: "No-Authenticated",
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
