import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import { Link } from "react-router-dom";

const SingupForm = ({ submitForm }) => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, SetDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(value));
    SetDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  },[errors]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
          <form className="form-wrapper" action="">
            <div className="name">
              <label htmlFor="" className="label">
                Full Name
              </label>
              <input
                type="text"
                className="input"
                name="fullname"
                value={value.fullname}
                onChange={handleChange}
              />
              {errors.fullname && <p className="error"> {errors.fullname}</p>}
            </div>

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
              <Link Link to="/login">
                {" "}
                Login
              </Link>
              <button className="submit" onClick={handleFormSubmit}>
                {" "}
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingupForm;
