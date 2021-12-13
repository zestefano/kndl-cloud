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

  const demo = () => {
    setCredential('demo')
    setPassword('password')
  }

  return (
    <form className='login' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li className='error' key={idx}>{error}</li>
        ))}
      </ul>
      <h2 className='text'>login</h2>
       
        <input
          placeholder='username or email'
          className='text'
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
     
        <input
          placeholder='password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      <button className='submit' type="submit">Log In</button>
      <button className='submit' onClick={demo}>demo</button>
    </form>
  );
}

export default LoginForm;