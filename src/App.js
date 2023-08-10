import React from 'react';
//import AppRouter from './AppRouter';
import './App.css';
// import NavBar from './components/NavBar';
// import { isMobile } from 'react-device-detect';
// import EmailForm from './components/EmailForm';
// import { HashLink as Link } from 'react-router-hash-link';
// import Portfolio from './components/Portfolio';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './Main.js';
import WebApp from '../src/components/WebApp';
import StickySlimeShowdown from '../src/components/StickySlimeShowdown';
import TasteTwin from '../src/components/TasteTwin';
import ErrorPage from './components/ErrorPage';


function App() {
  document.body.style.backgroundColor = 'black';

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/climate-risk-data-webapp" element={<WebApp />} />
        <Route path="/tastetwin" element={<TasteTwin />} />
        <Route path="/sticky-slime-showdown" element={<StickySlimeShowdown />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
