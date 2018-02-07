import api from "../api";
import { userLoggedIn } from "./auth";
export const adduser = data => dispatch =>
    api.user.adduser(data).then(user => dispatch(userLoggedIn(user)));
