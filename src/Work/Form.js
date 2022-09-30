import React, { useState } from "react";
import "./Work.css";
import SignUpFormSuccess from "./SignUpFormSuccess";
import Login from "./Login";
import SingupForm from "./SingupForm";

const Form = () => {
  const [formisSubmitted, setFormSubmitted] = useState(false);
  const submitFrom = () => {
    setFormSubmitted(true);
  };
  return (
    <div>
      {!formisSubmitted ? (
        <Login submitForm={submitFrom} />
      ) : (
        <SignUpFormSuccess />
      )}
    </div>
  );
};

export default Form;
