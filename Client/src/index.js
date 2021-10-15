import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import LoginForm from "./LoginForm/LoginForm";
import NoteList from "./Component/NoteList/NoteList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      {/* <Route path="/login" component={LoginForm} /> */}
      <Route path="/" exact component={App} />
      <Route path="/videos/:videoId" component={App} />
      <Route path="/notes" component={NoteList} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
