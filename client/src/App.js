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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  );

}

export default App;