import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

import '../LoginFormPage'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className='login' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      {/* <label className='text'> */}
      <h2 className='text'>login</h2>
       
        <input
          placeholder='username or email'
          className='text'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      {/* </label> */}
      {/* <label className='text'> */}
     
        <input
          placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      {/* </label> */}
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;