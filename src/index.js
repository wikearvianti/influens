import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import reportWebVitals from "./reportWebVitals";
import Routes from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter} from "react-router-dom";
import { AuthProvider } from "./Context/auth/auth";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </AuthProvider>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
