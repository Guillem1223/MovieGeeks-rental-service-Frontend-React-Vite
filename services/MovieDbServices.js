import axios from "axios";
import { enviroment } from "../_enviroments/enviroment";

export const MovieDbServices = {};
const api_key = "2e3f9190df1619a4466f26cb8cb65d97";

MovieDbServices.getAllMovies = async (page = 1) => {
  const apiUrl = `${enviroment.BASE_API_URL}/movies`;
  const results = await axios.get(apiUrl);
  console.log(results.data.data);
  return await axios.get(apiUrl);
};
MovieDbServices.getDetails = async (id) => {
  const detailsUrl = `${enviroment.BASE_API_URL}/movies/${id}`;
  return await axios.get(detailsUrl);
};

MovieDbServices.getSearchMovies = async (page = 1) => {
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${search}&page=1&include_adult=false`;

  return await axios.get(searchUrl);
};

MovieDbServices.getImage = async () => {
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  return await axios.get(imgUrl);
};
