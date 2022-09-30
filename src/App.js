import React from "react";
import "./App.css"
import { Route, Routes } from "react-router-dom";
import SingupForm from "./Work/SingupForm";
import Form from "./Work/Form";


const App = () => {
  return (
    <div>


      <Routes>
        <Route path="/Signup" element={<SingupForm />} />
        <Route path="/login" element={<Form/>} />
      </Routes>

      <Form/>
    </div>
  );
};

export default App;
