import React, { useState } from "react";
import { auth } from "../auth/firbaseconfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userAuth } from "../auth/authSlice";

function Register(props) {
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
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if(userCredential){
          updateProfile(auth.currentUser, {
            displayName: formData.name, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
             // Profile updated!
            // ...
            console.log(auth.currentUser);
            dispatch(userAuth({status:true, user: user.uid}))
          }).catch((error) => {
            // An error occurred
            // ...
          });
        }        
        // ...
      })
      .catch((error) => {
        setError({errorCode: error.code, errorMessage: error.message});
      });
  };

  return (
    <div className="mt-5 pt-5 container">
      <h2>Register</h2>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} />
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
        <p>{error?.errorCode}, {error?.errorMessage}</p>
        <button className="btn btn-primary" onClick={onSubmit}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
