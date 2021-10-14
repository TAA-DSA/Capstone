import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginForm from "./LoginForm/LoginForm";
import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/login" component={LoginForm} /> */}
      <Route path="/" exact component={App} />
      <Route path="/videos/:videoId" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
