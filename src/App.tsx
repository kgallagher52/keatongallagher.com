import React from "react";
import { Route, Switch } from "react-router-dom";
import Page404 from "./components/Page404";
import LandingPage from "./components/LandingPage";
import Canvas from "./components/Canvas";
import "./App.css";

const App = () => {
  return (
    <div data-test="app">
      <Canvas />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
