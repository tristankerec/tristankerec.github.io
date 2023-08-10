import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import WebApp from '../src/components/WebApp';
// import StickySlimeShowdown from '../src/components/StickySlimeShowdown';
// import TasteTwin from '../src/components/TasteTwin';

// import ErrorPage from './components/ErrorPage';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
//import NavBar from './components/NavBar';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
// import { Outlet } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path:"/climate-risk-data-webapp",
//     element:<WebApp/>
//   },
//   {
//     path:"/tastetwin",
//     element:<TasteTwin/>
//   },
//   {
//     path:"/sticky-slime-showdown",
//     element:<StickySlimeShowdown/>
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
    {/* <Router>
      <App />
    </Router> */}
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
