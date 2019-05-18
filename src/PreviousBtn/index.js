import React, { useState, createContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./index.css";

const PrevBtn = props => {
  return (
    <>
      <a>
        <Link
          className="prevBtn"
          to={{
            pathname:
              window.location.pathname === "/page/service"
                ? "/"
                : window.location.pathname === "/page/contact"
                ? "/page/service"
                : "/page/contact",
            state: {
              prevPath: window.location.pathname
            }
          }}
        >
          <span>Prev</span>
        </Link>
      </a>
    </>
  );
};

export default PrevBtn;
