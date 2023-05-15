//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { isMobile } from 'react-device-detect';
// import { ChevronDown } from 'bootstrap-icons';


function App() {

  const aboutRef = React.createRef();
  const portfolioRef = React.createRef();
  const contactRef = React.createRef();
  document.body.style.backgroundColor = '#212529';

  return (
    <div className="App">
      <NavBar style={{ top: -10, zIndex: 1}} aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      <div style={{backgroundColor:'black', paddingTop: '30vh', color:'white' }}>
        <h1 className="h1Text"  style={{fontSize:h1Size(), fontWeight:'bold'}}>
          Tristan Kerec
        </h1>
        <h2 className='h2Text' style={{fontSize:h1Size() * 0.5, fontWeight:'normal'}}>
          Bachelor of Computing Honours Graduate
          </h2>
        <h3 className='h3Text' style={{ paddingBottom:'10px', fontSize:h1Size() * 0.43, fontWeight:'normal'}}>
          University of Guelph, Ontario, Canada
        </h3>
        <button 
            class="btn btn-link text-decoration-none"
            type="button"
            style={{fontWeight:'500', color:'#2ecc70'}}
            onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"})}>
                Learn More <i class="bi bi-chevron-down"></i>
        </button>
        <a href="/TristanKerecCV.pdf" download>
          <button
            className="btn btn-primary"
            type="button"
            style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }}
          >
            Download Resume
          </button>
        </a>

        <div style={{paddingBottom:'100vh'}}></div>
        <div ref={aboutRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text"  style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:'100vh'}}>
          About
        </h1>
        
        <div ref={portfolioRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text" style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:'100vh'}}>
          Portfolio
        </h1>
        <div ref={contactRef} style={{paddingBottom:'20vh'}}/>
        <h1 className="h1Text" style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:'100vh'}}>
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


function h1Size() {
  // if (Platform.OS === 'ios' || Platform.OS === 'android') {
  //     if (Platform.isPad) {
  //         return 20;
  //     }
  //     return 35;
  // } else {
    if (isMobile) {
      return 35;
    } else {
      return 60;
    }
  // }
}