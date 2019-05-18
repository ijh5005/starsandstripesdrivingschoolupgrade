import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Servicepage from "./Servicepage";
import Contactpage from "./Contactpage";
import Reviewpage from "./Reviewpage";
import NextBtn from "./NextBtn";
import PrevBtn from "./PreviousBtn";

import './App.css';

function App() {
  return (<div id="app">
    <BrowserRouter>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/page/service" component={Servicepage}/>
      <Route exact path="/page/contact" component={Contactpage}/>
      <Route exact path="/page/review" component={Reviewpage}/>
      <Route path="/page" component={NextBtn}/>
      <Route path="/page" component={PrevBtn}/>
    </BrowserRouter>
  </div>);
}

export default App;
