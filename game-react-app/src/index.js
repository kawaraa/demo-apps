import React from "react";
import ReactDOM from "react-dom";
import AppStore from "./store/app-store";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <AppStore>
      <App />
    </AppStore>
  </React.StrictMode>,
  document.getElementById("root")
);
