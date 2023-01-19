import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { MovieDbServices } from "../../../services/MovieDbServices";
import Pagination from "../../components/Pagination/Pagination";
import "./PopularMovies.scss";
import { useNavigate } from "react-router-dom";
export function PopularMovies() {
  const [movies, setMovies] = useState([]);
  // const [result, setResult] = useState();
  const [page, setPage] = useState(1);
  const [total_pages, setTotal_Pages] = useState(1);

  const navigate = useNavigate();
  // getDetails = (event) => {
  //   const id = event.target.id;
  //   navigate(`/movies/${id}`);
  //   console.log(movies.id);
  // };
  const handleMovieDetails = (id) => {
    navigate(`/movies/${id}`);
    console.log({ id });
  };
  useEffect(() => {
    getAllMovies(page);
  }, [page]);

  const getAllMovies = async (page) => {
    try {
      const res = await MovieDbServices.getAllMovies(page);
      setMovies(res.data.data);

      setTotal_Pages(res.data.total_pages);
    } catch (error) {
      console.log(error.message);
    }
  };

  const baseUrlImg = "https://image.tmdb.org/t/p/w185";

  return (
    <div className="containerMovies">
      <Pagination setPage={setPage} page={page} pages={total_pages} />
      <h1 className="titlePopularMovies">Popular Movies</h1>
      <div className="popularMovies">
        {movies.length > 0 &&
          movies.map((mov) => (
            <div key={mov.id} movie={mov}>
              <p className="voteAverage">{mov.vote_average}</p>
              <img
                className="posters"
                src={baseUrlImg + mov.poster_path}
                alt="Poster de la película"
                id={mov.id}
                onClick={() => handleMovieDetails(mov.id)}
              />

              <br />
              <h6 className="titles">{mov.title}</h6>
            </div>
          ))}
      </div>
      <Pagination setPage={setPage} page={page} pages={total_pages} />
    </div>
  );
}
