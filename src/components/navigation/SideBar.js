import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import { FiStar, FiFolder, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";
import Activity from "../Activity";
import 'react-pro-sidebar/dist/css/styles.css';
import './sidebar.css';


export default function SideBar({userUsername}) {
  // returns side bar component

  const [selected, setSelected] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = useState("");
  const [menuCollapse, setMenuCollapse] = useState(true);
  const [arrowDirection, setArrowDirection] = useState("right");
  // const [activities, setActivities] = useState([]);
  const staticActivity = {
    "user": {
      "name": `${userUsername}`
    },
    "action": "added",
    "subject": {
      "name": "The Matrix"
    },
    "object": {
      "name": "Favorites"
    },
    "created_at": "20th of May, 2022",
    };

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  }

  const arrowClick = () => {
    arrowDirection === "right" ? setArrowDirection("left") : setArrowDirection("right");
  }

  return (
    <div id="header">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarContent>
          <Menu iconShape="square">
            <div className="closemenu">
              <FontAwesomeIcon icon={arrowDirection === 'left' ? "xmark" : "bars"} onClick={() => {
                arrowClick();
                menuIconClick();
              }} />
            </div>
            <div className="menuItems">
              <MenuItem icon={<FiFolder />} onClick={() => {
                setPage('/');
                setSelected('home');
              }}
                className={selected === 'home' ? 'selected' : ''}>
                Home
                {/* if selected is home, show the arrow */}
                {selected === 'home' ?
                  <Link to="/">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link>
                  : ''}
              </MenuItem>
              <MenuItem icon={<FiStar />} onClick={() => {
                setPage('/favorites')
                setSelected('favorites');
              }}
                className={selected === 'favorites' ? 'selected' : ''}>
                Favorites
                {/* if selected is favorites, show the arrow */}
                {selected === 'favorites' ?
                  <Link to="/favorites">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link> : ''}
              </MenuItem>
              <MenuItem icon={<FiClock />} onClick={() => {
                setPage('/watchlater')
                setSelected('watch later');
              }}
                className={selected === 'watch later' ? 'selected' : ''}>
                Watch Later
                {/* if selected is watch later, show the arrow */}
                {selected === 'watch later' ?
                  <Link to="/watchlater">
                    <FontAwesomeIcon icon="arrow-right" className="arrow-right" />
                  </Link> : ''}
              </MenuItem>
            </div>
          </Menu>
          {menuCollapse ? '' :
            <div className="latestActivities">
              {!menuCollapse &&
                <ul>
                  <h1>Latest Activities</h1>
                </ul>
              }
              {/* map through activities and return Activity component */}
              {!menuCollapse &&
                Object.values(staticActivity).map((key, index) => {
                  return <Activity activity={staticActivity} key={index} />
                }
                )
              }
            </div> }
        </SidebarContent>
      </ProSidebar>
    </div>
  );
}
