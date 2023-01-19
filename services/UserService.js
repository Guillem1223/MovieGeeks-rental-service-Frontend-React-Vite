import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

const UserService = {};
UserService.getAllUsers = async (token) => {
  const apiUrl = `${enviroment.BASE_API_URL}/users`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

UserService.rentMovie = async (userId, movieId) => {
  try {
    console.log(userId);
    console.log(movieId);
    const apiURL = `${enviroment.BASE_API_URL}/users/users/${userId}/rent/${movieId}`;
    const res = await axios.patch(apiURL, movieId);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteMovie = async (userId, movieId) => {
  try {
    const apiURL = `${enviroment.BASE_URL}/users/users/${userId}/delete/${movieId}`;
    const res = await axios.patch(apiURL, movieId);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteUser = async (user) => {
  try {
    const apiUrl = `${enviroment.BASE_API_URL}/users/delete/${user._id}`;
    const res = await axios.delete(apiUrl);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default UserService;
