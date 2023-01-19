import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MovieDbServices } from "../../../services/MovieDbServices";
import { useNavigate, useParams } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import UserService from "../../../services/UserService";
import { decodeToken, useJwt } from "react-jwt";
import "./MovieDetails.scss";
import TokenStorageService from "../../../services/TokenStorageService";
export function MovieDetails() {
  const [details, setDetails] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  const token = TokenStorageService.getToken();

  useEffect(() => {
    getDetails(id);
  }, []);

  const getDetails = async (id) => {
    try {
      const res = await MovieDbServices.getDetails(id);
      // console.log(res);
      setDetails(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const urlParams = new URLSearchParams(window.location.search);
  const _id = urlParams.get("_id");
  console.log(_id);
  const credentials = {
    name: sessionStorage.name,
    email: sessionStorage.email,
    password: sessionStorage.password,
  };
  const register = (credentials) => {
    try {
      AuthService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegisterRental = async () => {
    const userId = sessionStorage.getItem("userId");

    console.log(userId);
    await UserService.rentMovie(userId, id);
    navigate("/movies");
  };
  const baseUrlImg = "https://image.tmdb.org/t/p/w400/";
  const backGroundUrl = "https://image.tmdb.org/t/p/w1250/";
  return (
    <>
      <div className="backdrop">
        <div
          className="backdrop_path"
          style={{
            backgroundImage: `url(${baseUrlImg + details.backdrop_path})`,
          }}
        ></div>
        <div className="container">
          <h1 className="titleDetails">Movie Details</h1>
          <hr />
          <div className="details">
            <h1>{details.title}</h1>
            <p>{details.overview}</p>
            <img src={baseUrlImg + details.poster_path} alt="Poster movie" />
            <button className="btn btn-success" onClick={handleRegisterRental}>
              Rent it
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

MovieDetails.propTypes = {};

export default MovieDetails;
