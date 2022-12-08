import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.css';


export default function Header({userUsername, handleSetUserUsername, setIsLoggedIn, logout}) {
  // Returns a header nav element

  // Props:
  // - userUsername: String - state of username
  // - setIsLoggedIn: Function - sets state of isLoggedIn

  // function to logout

  return (
    <nav className="navbar">
      <ul>
        <li className="title">
          <p id="left">Cinema Guru</p>
        </li>
        <li className="picAndName">
          <img src="https://picsum.photos/100/100" alt="logo" />
          <p>Welcome, {userUsername}</p>
        </li>
        <li>
          <span className="logout" onClick={() => {
            logout();
            setIsLoggedIn(false);
            handleSetUserUsername("");
            console.log(`Logout ${userUsername}`);
          }} >
            <FontAwesomeIcon icon="sign-out-alt" />
            <p>Logout</p>
          </span>
        </li>
      </ul>
    </nav>
  );
}
