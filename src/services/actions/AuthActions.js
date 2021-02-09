import {
  CLEAR_ON_SIGNOUT,
  REFRESH_ACCESS_TOKEN,
  SET_AUTH_TOKENS,
} from "../constants";

export const setAuthTokens = (data) => ({
  type: SET_AUTH_TOKENS,
  payload: {
    accessToken: data && data.access_token,
    refreshToken: data && data.refresh_token,
  },
});

export const refreshAccessToken = (token) => ({
  type: REFRESH_ACCESS_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: CLEAR_ON_SIGNOUT,
});
