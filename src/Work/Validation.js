import React from "react";

const Validation = (values) => {
  let errors = {};

  if (!values.fullname) {
    errors.fullname = "Name is required.";
  }

  if (!values.email) {
    errors.email = " Email is requried.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";  
  }
  if (!values.password) {
    errors.password = "passord is required.";
  } else if (values.password.length < 5)
  {
    errors.password="password must be more than five characters."
  } 
  return errors;
};

export default Validation;
