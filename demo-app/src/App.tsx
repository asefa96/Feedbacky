import React from "react";
import logo from "./logo.svg";
import { Feedbacky } from "./features/feedbacky";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Layout />
      <Feedbacky />
    </>
  );
}

export default App;
