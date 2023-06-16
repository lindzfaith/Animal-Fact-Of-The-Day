import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Header, Fact } from "./Features/features";
import { facts } from "./facts.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Fact fact={facts[0]} />
  </React.StrictMode>
);
