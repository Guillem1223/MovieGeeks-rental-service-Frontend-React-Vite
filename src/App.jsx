import { useState } from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
  Link,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import { Header } from "./components/Header/Header";

import { PopularMovies } from "./containers/PopularMovies/PopularMovies";
import { Footer } from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Signup from "./containers/SignUp/Signup";
import { Payment } from "./containers/Payment/Payment";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import Admin from "./containers/Admin/Admin";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/payment" element={<Payment />} />
          <Route path="/movies" element={<PopularMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
