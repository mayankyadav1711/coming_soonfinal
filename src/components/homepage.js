/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Gita from "./gita";
import handledarkmode from "./handledarkmode";
import Header from "./header";
import Sidebar from "./sidebar";
import Eventbar from "./eventBar";

const Home = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  const handleDocumentClick = () => {
    closePopup();
  };

  const deadlineDate = new Date('September 19, 2023 23:59:59').getTime();

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date().getTime();
      const distance = deadlineDate - currentDate;

      const remainingDays = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const remainingMinutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const remainingSeconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    handledarkmode();
  }, []);
  return (
    <div className="background-container">
    <Header/>
    <Sidebar/>
    <Eventbar/>

    <div onClick={handleDocumentClick}>
    {isPopupVisible && (
        <div className="popup">
          {/* <div className="popup-content"> */}
          <div class="wrapper">

<main class="content">
  <span className="coming">COMING SOON!</span>

  <div class="countdown">
    <div class="countdown__days">
      <div class="number"></div>
      <span class>{countdown.days}</span>
      <span class="coming-line">Days</span>
      
    </div>

    <div class="countdown__hours">
      <div class="number"></div>
      <span class>{countdown.hours}</span>
      <span class="coming-line">Hours</span>
    </div>

    <div class="countdown__minutes">
      <div class="number"></div>
      <span class>{countdown.minutes}</span>
      <span class="coming-line">Minutes</span>
    </div>

    <div class="countdown__seconds">
      <div class="number"></div>
      <span class>{countdown.seconds}</span>
      <span class="coming-line">Seconds</span>
    </div>
  </div>

</main>

<div className="footer">
  <ul class="footer__links">
    <li><a href="https://chat.whatsapp.com/KKbEWaxNaxt1OI9EVtJxm9"><span class="fa fa-whatsapp"></span></a></li>


  </ul>
</div>
</div>
            <span className="popup-close" onClick={closePopup}>&times;</span>
            {/* <p>This is a popup content.</p> */}
          </div>
        // </div>
      )}</div>


      <section class="home-grid">
      <section>
      <Gita />
      </section>
      <section>
        <h1 class="heading">quick options</h1>

        <div class="box-container">
          <div class="notes-box">
            <h3 class="title-xclusive">Xclusive Notes🔥</h3>
            <p class="tutor">
              <i>
                <b>
                  "Discover our Handwritten College Notes designed to help you
                  excel in your studies and ace your exams."
                </b>
              </i>
            </p>

              {" "}
              <div>
      <button className="button-56 glowing" role="button" onClick={openPopup}>
        X~Notes
      </button>

     
    </div>{" "}
          </div>
          <div class="playground-box">
            <h3 class="title-xclusive">PlayGround🎮</h3>
            <p class="tutor">
              <i>
                <b>"Where Tech Meets Play"</b>
              </i>
            </p>
            {/* <a href="teachers.html" class="inline-btn">get started</a> */}
   
              {" "}
              <button class="button-56" role="button"  onClick={openPopup}>
                Key-Master🕹️
              </button>{" "}
              <br />{" "}
           
            <hr className="pacman" />
            <br />

              {" "}
              <button class="button-56" role="button"  onClick={openPopup}>
                Type-Blaster☄️
              </button>{" "}
   
          </div>
          </div>
        </section>

        <section>
        <div class="box-container">
                  <div class="cheatsheet-box">
            <h3 class="title-xclusive">CheatSheets📋🎯</h3>
            <p class="likes">
              {" "}
              <i>
                <b>"Unlocking Excellence: Your Rapid Technical Guide" </b>
              </i>
            </p>
            <div class="flex">
              <a  onClick={openPopup}>
                <i class="fab fa-html5"></i>
                {/* <span>HTML</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fab fa-css3"></i>
                {/* <span>CSS</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fab fa-js"></i>
                {/* <span>JavaScript</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fab fa-bootstrap"></i>
                {/* <span>BootStrap</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fab fa-react"></i>
                {/* <span>React</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fas fa-file-code"></i>
                {/* <span>VS-Code</span> */}
              </a>
             
              <a onClick={openPopup}>
                <i class="fa-brands fa-python"></i>
                {/* <span>Windows</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fa-solid fa-globe"></i>
                {/* <span>Windows</span> */}
              </a>
              <a onClick={openPopup}>
                <i class="fa-solid fa-database"></i>
                {/* <span>Chrome</span> */}
              </a>
            </div>
          </div>
</div>
     </section>
     <section>
        <div class="box-container">
     <div class="roadmap-box">
            <h3 class="title-xclusive">RoadMaps🚀📈</h3>
            <p class="likes">
              {" "}
              <i>
                <b>"Guiding Your Journey Along the Technical Pathway"</b>{" "}
              </i>
            </p>
            <div class="flex">
            <a onClick={openPopup}>
              {/* <i class="fas fa-wave-square fa-flip-horizontal"></i> */}
              <div className="line"></div>
              <i class="fab fa-html5"></i>
              {/* <i class="fas fa-wave-square"></i> */}
              {/* <i class="fab fa-html5"></i> */}
              {/* <i class='fas fa-person-walking-dashed-line-arrow-right'></i> */}
              <i class="fab fa-css3"></i>
              {/* <i class="fas fa-wave-square fa-flip-horizontal"></i> */}
              <i class="fab fa-js"></i>
              {/* <i class="lni lni-line-dashed"></i> */}
              <i class="fas fa-code"></i>
              <div className="line"></div>
                {/* <span>Full Stack Developer</span> */}
              <span className="roadmap" >Frontend Developer</span>
              </a>
              <a onClick={openPopup}>
              <div className="line"></div>
              <i class="fa-solid fa-leaf"></i>
              <i class="fa-regular fa-circle"><div className="express">EX</div></i>
              <i class="fab fa-react"></i>
              <i class="fa-brands fa-node"></i>
              <div className="line"></div>
              <span className="roadmap" >Mern Developer</span>
              </a>
             
              <a onClick={openPopup}>
              <div className="line"></div>
              <i class="fa-brands fa-python"></i>
              <i class="fa-brands fa-java"></i>
              <i class="fa-brands fa-node"></i>
              <i class="fas fa-gem"></i>
              <div className="line"></div>
              <span className="roadmap" >Backend Developer</span>
              </a>
              
            </div>
          </div> 
</div>
</section>
</section>
     {/* about us  */}

   
    </div>
  );
};

export default Home;