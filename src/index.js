import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { UserProvider } from "./UserProvider";
import { UserMenu } from "./UserMenu";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <UserMenu />
    </UserProvider>
  </React.StrictMode>
);
