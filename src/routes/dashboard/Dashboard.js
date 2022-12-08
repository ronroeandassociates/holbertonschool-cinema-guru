import React from "react";
import Header from "../../components/navigation/Header";
import SideBar from "../../components/navigation/SideBar";
import './Dashboard.css';
import Favorites from "./Favorites";
import WatchLater from "./WatchLater";
import HomePage from "./HomePage";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function Dashboard({ userUsername, setIsLoggedIn, handleSetUserUsername }) {
  // returns dashboard div component

  // Props:
  // - userUsername: String - state of username
  // - setIsLoggedIn: Function - sets state of isLoggedIn

  // function to logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsLoggedIn(false);
  }

  return (
    <div className="dashboard-container">
      <BrowserRouter>
        <Header
          userUsername={userUsername}
          logout={logout}
          setIsLoggedIn={setIsLoggedIn}
          handleSetUserUsername={handleSetUserUsername}
        />
        <SideBar userUsername={userUsername} />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watchlater" element={<WatchLater />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
