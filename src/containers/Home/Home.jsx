import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Home.scss";
import { NavLink, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import TokenStorageService from "../../../services/TokenStorageService";
import { validateFormValues } from "../../_helpers/form-utilities";

function Home(props) {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      login(credentials);
    }
    console.log(formErrors);
  }, [formErrors]);

  const credentials = {
    email: formValues.email,
    password: formValues.password,
  };
  const login = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      console.log(res.data.role);
      sessionStorage.setItem("userId", res.data.id);
      switch (res.data.role) {
        case "user":
          navigate("/movies");
          break;
        case "super_admin":
          navigate("/admin");
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateFormValues(formValues));
    setIsSubmit(true);
  };

  return (
    <div className="homeContainer">
      <img className="backgroundHome" src="/img/home.webp" alt="" />
      <div className="homeCard">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                value={formValues.email}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.email}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={formValues.password}
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text form-text-error">
                {formErrors.password}
              </div>
            </div>
            <div className="d-grid gap-2">
              <button
                onClick={() => login(credentials)}
                className="btn btn-success fw-bold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
