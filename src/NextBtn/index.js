import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NextBtn = () => {
  return (
    <>
      <Link
        className="nextBtn"
        to={{
          pathname:
            window.location.pathname === "/page/service"
              ? "/page/contact"
              : window.location.pathname === "/page/contact"
              ? "/page/review"
              : window.location.pathname === "/page/review"
              ? "/"
              : false,

          state: {
            previousLocation: "/"
          }
        }}
      >
        <span>Next</span>
      </Link>
    </>
  );
};

export default NextBtn;
