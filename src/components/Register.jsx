import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register(props) {
  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="mt-5 pt-5 container">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={onSubmit}>Register</button>
      </form>
    </div>
  );
}

export default Register;
