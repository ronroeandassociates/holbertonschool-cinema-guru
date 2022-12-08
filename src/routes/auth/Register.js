import React from "react";
import Button from "../../components/general/Button";
import Input from "../../components/general/Input";
import './auth.css';


export default function Register({ username, password, setUsername, setPassword }) {
  // Returns form with input fields 'username' and 'password' and a button 'Sign Up'

  // Props:
  // - username: string - username
  // - password: string - password
  // - setUsername: function - sets the state of the username
  // - setPassword: function - sets the state of the password

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-form-header">
          <h1>Create new account</h1>
        </div>
        <div className="signup-form-body">
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
            label="Sign Up"
            className="button-signup"
            icon="key"
            type="submit"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
