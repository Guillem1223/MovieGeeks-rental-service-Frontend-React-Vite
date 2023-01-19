import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

const AuthService = {};

const authApiUrl = `${enviroment.BASE_API_URL}/auth`;

AuthService.login = async (credentials) => {
  return await axios.post(authApiUrl + "/login", {
    email: credentials.email,
    password: credentials.password,
  });
};
AuthService.register = async (credentials) => {
  console.log(credentials);
  return await axios.post("http://localhost:3000/auth/register", {
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
    movies: credentials.movies,
  });
};
export default AuthService;
