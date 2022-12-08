import React from "react";
import Button from "../../components/general/Button";
import Input from "../../components/general/Input";
import './auth.css';


export default function Login({ username, password, setUsername, setPassword }) {
  // Returns form with input fields 'username' and 'password' and a button 'Sign in'

  // Props:
  // - username: string - username
  // - password: string - password
  // - setUsername: function - sets the state of the username
  //- setPassword: function - sets the state of the password

  return (
    <div className="signin-container">
      <div className="signin-form">
        <div className="signin-form-header">
          <h1>Sign in with your account</h1>
        </div>
        <div className="signin-form-body">
          <Input
            label="Username:"
            type="text"
            className="input-text"
            value={username}
            setValue={setUsername}
            icon="user"
            inputAttributes={{ placeholder: "Username" }}
          />
          <Input
            label="Password:"
            type="password"
            className="input-password"
            value={password}
            setValue={setPassword}
            icon="key"
            inputAttributes={{ placeholder: "Password" }}
          />
          <Button
            label="Sign in"
            className="button-signin"
            icon= "key"
            onClick={() => {
              console.log(`Sign in ${username}`);
            } }
          />
        </div>
      </div>
    </div>
  );
}
