import React, { useState, createContext } from "react";
import { Link, Redirect } from "react-router-dom";
import "./index.css";

const PrevBtn = props => {

  const allRoutes = ["/", "/page/service", "/page/contact", "/page/review", "/page/tips"];

  const getPath = (direction) => {
    const currentLocation = window.location.pathname;
    let routeIndex = allRoutes.indexOf(currentLocation);
    const nextIndex = direction ? --routeIndex : ++routeIndex;
    debugger
    return allRoutes[nextIndex]
  }

  return (<div id="prevNextNav">
    <Link className="prevBtn" to={getPath(1)}>Prev</Link>
    <Link className="nextBtn" to={getPath(0)}>Next</Link>
  </div>);

};

export default PrevBtn;
