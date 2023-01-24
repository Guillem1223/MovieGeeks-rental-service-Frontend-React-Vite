import React, { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import TokenStorageService from "../../../services/TokenStorageService";
import { Navigate, useNavigate } from "react-router-dom";
import "./Admin.scss";
export default function Admin() {
  const navigate = useNavigate();
  const token = TokenStorageService.getToken();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, []);

  const getAllUsers = async (token) => {
    try {
      const res = await UserService.getAllUsers(token);
      setUsers(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  const handleLogout = () => {
    TokenStorageService.logout();
    navigate("/");
  };
  const handleDelete = async (userToDelete) => {
    const res = await UserService.deleteUser(userToDelete);
    console.log(res);
    await getAllUsers(token);
    console.log(users);
  };
  const baseUrlImg = "https://image.tmdb.org/t/p/w185";

  const userRentMovies = (movies) => {
    return movies.map((movie) => {
      console.log(movie.poster);
      return <img src={baseUrlImg + movie.poster} alt="" />;
    });
  };
  const userDetails = users.map((user) => {
    console.log(user);
    return (
      <div key={user._id}>
        <ol>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.password}</li>
          <li>{user.role}</li>
          <li>{userRentMovies(user.movies)}</li>
        </ol>
        <div className="admin-buttons">
          <button
            onClick={() => {
              handleDelete(user);
            }}
            className="delete-user"
          >
            borrar
          </button>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h2 className="titleAdmin">Admin panel</h2>
      <hr />
      <div>{userDetails}</div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
