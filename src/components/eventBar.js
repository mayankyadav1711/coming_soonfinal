import React, { useEffect, useState } from "react";
import $ from "jquery";
import handledarkmode from "./handledarkmode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Eventbar = () => {

  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Set your loading state appropriately
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    handledarkmode();
    const staticEvents = [
        {
          title: "Google Arcade ",
          description: "Swags Kamao",
          date: new Date().toISOString(), // Set a valid date for the static event
          timestamp: new Date().getTime(), // Set a valid timestamp
          link: "",
        },
        {
          title: "SSIP Hackathon",
          description: "Government Hackathon",
          date: new Date().toISOString(), // Set a valid date for the static event
          timestamp: new Date().getTime(), // Set a valid timestamp
          link: "",
        },
      ];
      const allEvents = [...staticEvents];

      // Filter events based on searchInput
      const filtered = allEvents.filter(
        (event) =>
          event.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          event.description.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredEvents(filtered);
      setLoading(false);

    /* Totally unnecessary swiping gestures*/
    var gestureZone = document;
    var touchstartX = 0,
      touchstartY = 0;
    gestureZone.addEventListener(
      "touchstart",
      function (event) {
        touchstartX = event.changedTouches[0].screenX;
        touchstartY = event.changedTouches[0].screenY;
      },
      false
    );

    gestureZone.addEventListener(
      "touchend",
      function (event) {
        var touchendX = event.changedTouches[0].screenX;
        var touchendY = event.changedTouches[0].screenY;
        handleGesture(touchendX, touchendY);
      },
      false
    );

    function handleGesture(touchendX, touchendY) {
      var acceptableYTravel =
        touchendY - touchstartY < 15 && touchendY - touchstartY > -15;

      var swiped = "swiped: ";
      if (touchendX < touchstartX && acceptableYTravel) {
        openSidebar();
        console.log(swiped + "left!");
      }
      if (touchendX > touchstartX && acceptableYTravel) {
        closeSidebar();
        console.log(swiped + "right!");
      }
    }
    function openSidebar() {
      $("#event-sidebar").addClass("move-to-left");
      $("#event-sidebar-tab").addClass("move-to-left");
      $(".arrow").addClass("active");
    }
    function closeSidebar() {
      $("#event-sidebar").removeClass("move-to-left");

      $("#event-sidebar-tab").removeClass("move-to-left");
      $(".arrow").removeClass("active");
    }
    /* End of totally unnecessary swiping gestures*/
  }, []);

  function formatTimestamp(eventTimestamp) {
    const eventDate = new Date(eventTimestamp);
    const currentDate = new Date();

    const timeDiff = currentDate - eventDate;

    if (timeDiff < 60 * 1000) {
      // Less than 1 minute
      return `${Math.floor(timeDiff / 1000)} seconds ago`;
    } else if (timeDiff < 60 * 60 * 1000) {
      // Less than 1 hour
      return `${Math.floor(timeDiff / (60 * 1000))} minutes ago`;
    } else if (timeDiff < 24 * 60 * 60 * 1000) {
      // Less than 24 hours
      return `${Math.floor(timeDiff / (60 * 60 * 1000))} hours ago`;
    } else if (eventDate.toDateString() === currentDate.toDateString()) {
      return "Today";
    } else if (
      eventDate.toDateString() ===
      new Date(currentDate - 24 * 60 * 60 * 1000).toDateString()
    ) {
      return "Yesterday";
    } else {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return eventDate.toLocaleDateString("en-US", options);
    }
  }

  function toggleSidebar() {
    $("#event-sidebar").toggleClass("move-to-left");
    $("#event-sidebar-tab").toggleClass("move-to-left");

    $(".arrow").toggleClass("active");
  }

  return (
    <>
      {loading ? (
        <div className="spinner">
          {/* Use a loading spinner here */}
          <div className="spinner-icon"></div>
        </div>
      ) : (
        <>
          <div className="event-sidebar-tab" id="event-sidebar-tab">
            <div
              className=" text-center announcement-icon"
              id="sidebar-tab-text"
              onClick={toggleSidebar}
            >
              <div className="announcement-icon">
                <FontAwesomeIcon icon={faBullhorn} />
              </div>
            </div>
          </div>

          <div
            className="event-sidebar"
            id="event-sidebar"
            style={{
              height: "100vh",
              maxHeight: "100vh",
              overflowY: "auto",
            }}
          >
            <div className="container-liner">
              <div className="event-container">
                <div className="column">
                  <form className="event-searchbar">
                    <input
                      type="text"
                      name="search_box"
                      required
                      placeholder="Search Event"
                      maxLength="100"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="fa fa-search "></button>
                  </form>
                  <h2 className="demo-title">Upcoming Events 🔥</h2>
                  {filteredEvents.length === 0 ? (
                    <p className="event-nofound">No events found.</p>
                  ) : (
                    filteredEvents.map((event) => (
                      <>
                        <div className="post-module">
                          <div className="thumbnail">
                            <div className="date">
                              <div className="day">
                                {new Date(event.date).getDate()}
                              </div>
                              <div className="month">
                                {" "}
                                {new Intl.DateTimeFormat("en-US", {
                                  month: "short",
                                }).format(new Date(event.date))}
                              </div>
                            </div>
                            <img
                              src={
                                event?.profilePic ||
                                "https://firebasestorage.googleapis.com/v0/b/studymate-c44e8.appspot.com/o/gcp.png?alt=media&token=c06a8c88-9595-4e0e-87b0-ad1ba02c1a5f"
                              }
                              alt="City Lights in New York"
                            />
                          </div>

                          <div className="post-content">
                            <h1 className="title">{event.title}</h1>
                            <h2 className="sub_title">{event.description}</h2>
                            {/* <p className="description">
                          New York, the largest city in the U.S., is an
                          architectural marvel with plenty of historic
                          monuments, magnificent buildings and countless
                          dazzling skyscrapers.
                        </p> */}
                            <div className="post-meta">
                              <span className="timestamp">
                                <i className="fa fa-clock-o"></i>
                                {formatTimestamp(event.timestamp)}
                              </span>
                              <Link to={event.link}>
                                <button className="eventbtn">
                                  <span>Read More</span>
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                      </>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Eventbar;
