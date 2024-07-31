import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import "modern-normalize";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
