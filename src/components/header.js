import React, { useEffect,useState } from "react";
import { Link,  } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import defaultprofilepic from "./images/60111.jpg";
import logo from "./images/collegpt-pink.svg";
import Welcome_Collegpt from "./collegptanimation";

const Header = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
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
    <header className="header">
      <section className="flex">
        <Link to="/">
          <a className=" logo-trans">
            <img className="  logo-header" src={logo} alt="College GPT" />
            College GPT
          </a>
        </Link>

    

        <Link to="/">
          {" "}
          <Welcome_Collegpt />{" "}
        </Link>
        <div className="icons">
          {/* <div id="menu-btn" className="fas fa-bars"></div> */}
          {/* <div id="search-btn" className="fas fa-search"></div> */}
          <div id="user-btn" className="fas fa-users"></div>
          <div id="toggle-btn" className="fas fa-sun"></div>
        </div>

       
          
{/* 
          <div className="profile">
            <img
              src={ defaultprofilepic}
              className="image"
              alt=""
            />
            <h3 className="name">Student</h3>
            <p className="role">{userProfile.Roles[0]}</p>
              <a className="btn" onClick={openPopup}>view profile</a>
            <div className="flex-btn">
              
            </div>
          </div> */}
      
      </section>
    </header>
    </>
  );
};

export default Header;
