import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import defaultprofilepic from "./images/60111.jpg";

import handledarkmode from "./handledarkmode";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  useEffect(() => {
    handledarkmode();
    if (isOpen) {
      document.body.classList.add("sidebar-open");
      document.body.classList.remove("sidebar-closed");
    } else {
      document.body.classList.remove("sidebar-open");
      document.body.classList.add("sidebar-closed");
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
   <>
    {isPopupVisible && (
      <div className="popup">
        <div className="popup-content">
          <span className="popup-close" onClick={closePopup}>&times;</span>
          <p>This is a popup content.</p>
        </div>
      </div>
    )}
   
   
    <nav className={`sidebar ${isOpen ? "open" : "close"}`}>
      <header>
        <div className="image-text">
          <div className="profile">
            <img
              src={defaultprofilepic}
              className={`image ${isOpen ? "large-image" : ""}`}
              alt=""
            />
          </div>
          <div
            className={`toggle-icon ${isOpen ? "open" : "close"}`}
            onClick={handleToggle}
          >
            <FontAwesomeIcon icon={isOpen ? faAngleRight : faAngleRight} />
          </div>
        </div>
        <div>
          <div className="text logo-text">
            <span className="name">Username</span>
            <span className="profession">Role</span>
          </div>
        </div>
      </header>
      <div className="menu-bar">
        <div className="menu">
          <ul className="menu-links">
            <li className="">
            <a>
                <i className="fas fa-home"></i>
                <span className="text ">Home</span>
</a>
            </li>
            <li className="">
   <a>
                <i className="fas fa-question"></i>
                <span className="text ">About</span>
                </a>
            </li>
            <li className="">
            <a>
                <i className="fas fa-graduation-cap"></i>
                <span className="text ">Courses</span>
                </a>
            </li>
            <li className="">
            <a>
                <i className="fas fa-chalkboard-user"></i>
                <span className="text ">Contributors</span>
                </a>
            </li>
            <li className="">
            <a>
                <i className="fas fa-headset"></i>
                <span className="text ">Contact Us</span>
                </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
 
  );
};

export default Sidebar;
