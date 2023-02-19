import logo from './logo.svg';
// import './App.css';
import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Drawing from "./components/pages/Drawing";
import Detecting from "./components/pages/Detecting";

import BareMenu from "./components/Navbar/BareMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <><BareMenu /><Home /></>,
  },
  {
    path: "/home",
    element: <><BareMenu /><Home /></>,
  },
  {
    path: "/about",
    element:  <><BareMenu /><About /></>,
  },
  {
    path: "/contact",
    element:  <><BareMenu /><Contact /></>,
  },
  {
    path: "/draw",
    element:  <><BareMenu /><Drawing /></>,
  },
  {
    path: "/detect",
    element:  <><BareMenu /><Detecting /></>,
  },
]);

function App() {

  return (
    <RouterProvider router={router}/>
  );

}

export default App;