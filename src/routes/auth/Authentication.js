import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import axios from "axios";
import './auth.css'


export default function Authentication({ setIsLoggedIn, setUserUsername }) {
  // Returns an html form in that has who buttons 'Sign in' and 'Sign up'

  // Props:
  // - setIsLoggedIn: function - sets the state of the isLoggedIn
  // - setUserUsername: function - sets the state of the userUsername

  // init state for _switch (sign in or sign up)
  const [_switch, set_switch] = useState(true);
  // init state for username
  const [username, setUsername] = useState("");
  // init state for password
  const [password, setPassword] = useState("");

  // function to switch between sign in and sign up
  function handleSwitch(value) {
    set_switch(value);
    console.log(_switch);
    setPassword("");
    setUsername("");
  }

  // function to handle sign in
  function handleSubmit(e) {
    e.preventDefault();
    // depending on switch state, send appropriate post request
    if (_switch) {
      // send sign in request
      axios
        .post("http://localhost:8000/api/auth/login", {
          username,
          password
        })
        .then(res => {
          // On success, we will get a response containing a JWT access token.
          // Firstly, we will set the access token in localStorage
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            // Then we will set the isLoggedIn state to true
            setIsLoggedIn(true);
            // And we will set the userUsername state to the username
            setUserUsername(username);
          }
        })
        .catch(err => {
          // On error, we will get a response containing an error message.
          // We will set the error message in the state.
          console.log(err);
        });
    } else {
      // send sign up request
      axios
        .post("http://localhost:8000/api/auth/register", {
          username,
          password
        })
        .then(res => {
          // On success, we will get a response containing a JWT access token.
          // Firstly, we will set the access token in localStorage
          if (res.data.accessToken) {
            localStorage.setItem("accessToken", res.data.accessToken);
            // Then we will set the isLoggedIn state to true
            setIsLoggedIn(true);
            // And we will set the userUsername state to the username
            setUserUsername(username);
          }
        })
        .catch(err => {
          // On error, we will get a response containing an error message.
          // We will set the error message in the state.
          console.log(err);
        });
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit} >
        <div className="auth-form-header">
          <div
            className={_switch ? "active" : ""}
            id="headerDiv1"
            onClick={() => { handleSwitch(true) }}
          >
            Sign in
          </div>
          <div
            className={!_switch ? "active" : ""}
            id="headerDiv2"
            onClick={() => { handleSwitch(false) }}
          >
            Sign up
          </div>
        </div>
        <div className="auth-form-body">
          {/* if _switch is true, show sign in form */}
          {_switch &&
            <Login
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
          {/* if _switch is false, show sign up form */}
          {!_switch &&
            <Register
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          }
        </div>
      </form>
    </div>
  );
}
