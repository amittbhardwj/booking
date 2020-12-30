import React from "react";
import SignUp from "./components/SignUp";
import Email from "./components/Email";
import Residential from "./components/Residential";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} exact />
          <Route path="/email" component={Email} exact />
          <Route exact path="/residential" component={Residential} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
