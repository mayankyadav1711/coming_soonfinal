/* eslint-disable no-loop-func */
import React, { useContext, useEffect, useState } from "react";

import handledarkmode from "./handledarkmode";

const Welcome_Collegpt = () => {
  useEffect(() => {
    handledarkmode();
  }, []);

  return (
    <>
      <div class="welcome-center-container">
        <div class="welcome-svg-wrapper">
          <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
            <rect class="welcome-shape" height="60" width="320" />
            <text
              class="welcome-text"
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              Co∏e<tspan class="welcome-gpt">GPT</tspan>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Welcome_Collegpt;
