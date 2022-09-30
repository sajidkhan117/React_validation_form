import React, { useState } from "react";
import { Link } from "react-router-dom";
import Validation from "./Validation";
const Login = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(value));
  };
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Login </h2>
          <form className="form-wrapper" action="">
            <div className="email">
              <label htmlFor="" className="label">
                Email
              </label>
              <input
                type="email"
                className="input"
                name="email"
                value={value.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error"> {errors.email} </p>}
            </div>

            <div className="password">
              <label htmlFor="" className="label">
                Password
              </label>
              <input
                type="password"
                className="input"
                name="password"
                value={value.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error"> {errors.password} </p>}
            </div>

            <div>
              <Link to="/Signup"> Sign Up</Link>
              <button className="submit" onClick={handleFormSubmit}>
                Login 
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
