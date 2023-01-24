import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import UserService from "../../../services/UserService";

export const User = () => {
  const [user, setUser] = useState([]);
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    getUserById(userId);
  }, []);

  const getUserById = async (userId) => {
    try {
      const res = await UserService.getUserById(userId);
      setUser(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };
  //falta treure la array de movies de userId, s'hauria de guardar en una variable i fer un foreach x fer un findById a la collection movies
  return (
    <div>
      <h2 className="titleAdmin">User Panel</h2>
      <hr />
      <div>
        {user.map((user) => (
          <div key={user._id}>
            <ol>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.password}</li>
              <li>{user.role}</li>
              <li>{user.movies}</li>
            </ol>
            <div className="admin-buttons">
              <button
                // onClick={() => {
                //   handleDelete(user);
                // }}
                className="delete-user"
              >
                Delete Movie
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
