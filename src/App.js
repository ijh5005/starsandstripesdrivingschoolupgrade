import React, { useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Servicepage from "./Servicepage";
import Contactpage from "./Contactpage";
import Reviewpage from "./Reviewpage";
import Tips from "./Tips";
import NextPreviousNavigation from "./NextPreviousNavigation";

import './App.css';

function App() {

  /*useEffect(() => {
    setTimeout(() => {
      alert("Super offer! FREE 15 min practice parallel parking before the test")
    }, 2000)
  }, [])*/

  return (<div id="app">
    <BrowserRouter>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/page/service" component={Servicepage}/>
      <Route exact path="/page/contact" component={Contactpage}/>
      <Route exact path="/page/review" component={Reviewpage}/>
      <Route exact path="/page/tips" component={Tips}/>
      <Route path="/page" component={NextPreviousNavigation}/>
    </BrowserRouter>
  </div>);
}

export default App;
