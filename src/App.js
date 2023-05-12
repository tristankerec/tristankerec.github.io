//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';

function App() {

  const aboutRef = React.createRef();
  const portfolioRef = React.createRef();
  const contactRef = React.createRef();

  return (
    <div className="App">
      <NavBar aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      <div style={{backgroundColor:'black', paddingTop: '30vh', color:'white' }}>
        <h1 className="h1Text"  style={{fontWeight:'bold'}}>
          Tristan Kerec
        </h1>
        <h2 className='h2Text' style={{fontWeight:'normal'}}>
          Bachelor of Computing Honours Graduate
          </h2>
        <h3 className='h3Text' style={{fontWeight:'normal', paddingBottom:'100vh'}}>
          University of Guelph, Ontario, Canada
        </h3>
        <div ref={aboutRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text"  style={{fontWeight:'bold', paddingBottom:'100vh'}}>
          About
        </h1>
        <div ref={portfolioRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text" style={{fontWeight:'bold', paddingBottom:'100vh'}}>
          Portfolio
        </h1>
        <div ref={contactRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text" style={{fontWeight:'bold', paddingBottom:'100vh'}}>
          Contact
        </h1>
      </div>
      
      {/* <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body> */}
    </div>
  );
}

export default App;
