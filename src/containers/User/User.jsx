import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import UserService from "../../../services/UserService";

export const User = () => {
  const [movies, setMovies] = useState([]);
  const userId = sessionStorage.getItem("userId");
  const { id } = useParams();
  console.log(userId);
  useEffect(() => {
    getUserById(userId);
  }, []);

  const getUserById = async () => {
    const res = await UserService.getUserById(userId);
    console.log(res.data.data.movies);
    setMovies(res.data.data.movies);
  };
  const baseUrlImg = "https://image.tmdb.org/t/p/w185";

  const renderMovies = movies.map((movie) => {
    console.log(movies);
    console.log(movie.id);
    console.log(movie.title);
    return (
      <>
        <div key={movie.id}>
          <ol>
            <li>{movie.title}</li>
            <li>{movie.id}</li>
            {/* <li>{movie.password}</li> */}
            <img
              key={movie.id}
              src={baseUrlImg + movie.poster}
              alt="Movie Poster"
            />
          </ol>
          <div className="admin-buttons"></div>
        </div>
      </>
    );
  });

  return (
    <>
      <div>{renderMovies}</div>
    </>
  );
};

//   return (
//     <div>
//       <h2 className="titleAdmin">User Panel</h2>
//       <hr />
//       <div>
//         {movies.map((user) => (
//           <div key={user._id}>
//             <ol>
//               <li>{user.name}</li>
//               <li>{user.email}</li>
//               <li>{user.password}</li>
//               <li>{user.role}</li>
//               <li>{user.movies}</li>
//             </ol>
//             <div className="admin-buttons">
//               <button
//                 // onClick={() => {
//                 //   handleDelete(user);
//                 // }}
//                 className="delete-user"
//               >
//                 Delete Movie
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
//
