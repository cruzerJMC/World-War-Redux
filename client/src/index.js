import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./components/App";
// import { Router } from "react-router";
// import { ReduxRouter } from "redux-router";
// import routes from "./routes";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
