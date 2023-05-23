import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { useDispatch } from "react-redux";
import { userAuth } from "../auth/authSlice";

function Login(props) {
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState();
  
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    dispatch(userAuth({status:true, user: user.uid}))
  })
  .catch((error) => {
    setError({errorCode: error.code, errorMessage: error.message});
  });
  };

  return (
    <div className="mt-5 pt-5 container">
      <h2>Login</h2>
      <form>
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
        <button className="btn btn-primary" onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}

export default Login;
