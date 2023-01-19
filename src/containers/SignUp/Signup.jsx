import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SignUp.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Payment } from "../Payment/Payment";
import AuthService from "../../../services/AuthService";

function Signup(props) {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleMail = (ev) => {
    setMail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const credentials = {
    name,
    email: mail,
    password,
  };

  const register = (credentials) => {
    try {
      AuthService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    register(credentials);
    navigate("/");
    console.log(credentials);
  };

  return (
    <div className="container">
      <img className="backgroundHome" src="/img/home.webp" alt="" />
      <div className="signCard">
        <div className="form">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="inputName"
                onChange={handleName}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputSurname" className="form-label">
                Surname
              </label>
              <input type="name" className="form-control" id="inputSurname" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                onChange={handleMail}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
                onChange={handlePassword}
              />
            </div>

            <Payment />

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Save Card
                </label>
              </div>
            </div>
            <div className="col-12"></div>
            <button className="btn btn-success" onClick={handleRegister}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {};

export default Signup;
