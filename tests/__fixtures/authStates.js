export const initialState = {
  status: 'checking',
  user: {},
  errorMessage: undefined,
};

export const authenticatedState = {
  status: 'authenticated',
  user: {
    uid: 'ABC',
    name: 'Oscar',
  },
  errorMessage: undefined,
};

export const notAuthenticatedState = {
  status: 'no-authenticated',
  user: {},
  errorMessage: undefined,
};
