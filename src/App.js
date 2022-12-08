import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  // init state for isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // init state for userUsername
  const [userUsername, setUserUsername] = useState('');

  // handle setIsLoggedIn
  const handleSetIsLoggedIn = (value) => {
    setIsLoggedIn(value);
  }

  // handle setUserUsername
  const handleSetUserUsername = (value) => {
    setUserUsername(value);
  }

  // event handler for on mount
  useEffect(() => {
    // get value of accessToken from localStorage
    const accessToken = localStorage.getItem('accessToken');
    // send post request to /api/auth with auth header set to 'Bearer <accessToken>'
    axios
      .post(`http://localhost:8000/api/auth`, {}, {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        // on success, set isLoggedIn to true
        handleSetIsLoggedIn(true);
        // on success, set userUsername to res.data.username
        handleSetUserUsername(res.data.username);
        console.log(res.data.username);
      })
      .catch((err) => {
        // on failure, set isLoggedIn to false
        handleSetIsLoggedIn(false);
        // on failure, set userUsername to ''
        handleSetUserUsername('');
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {/* if isLoggedIn is true, show Dashboard component */}
      {isLoggedIn ? (
        <Dashboard
          userUsername={userUsername}
          setIsLoggedIn={handleSetIsLoggedIn}
          handleSetUserUsername={handleSetUserUsername}
        />
      ) : (
        /* if isLoggedIn is false, show Authentication component */
          <Authentication
            setIsLoggedIn={handleSetIsLoggedIn}
            setUserUsername={handleSetUserUsername}
          />
        // <Authentication />
      )}

    </div>
  );
}

export default App;
