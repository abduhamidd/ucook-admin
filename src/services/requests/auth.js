import {request} from "../api/index";

const auth = {
  login: (data) => request.post("/v1/login/", data),
};
export default auth;
