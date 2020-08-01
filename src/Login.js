import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault(); // this stops refresh
    // login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  const register = (event) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://www.freelogodesign.org/file/app/blog/20180911090509731amazon_logo_RGB.jpg"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <form>
          <h1>Sign in</h1>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            name=""
            id=""
          />
          <h5>password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            name=""
            id=""
          />
          <button onClick={login} type="submit" className="login__Signinbutton">
            Sign in
          </button>
        </form>

        <small>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </small>
        <button onClick={register} className="login__registerbutton">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
