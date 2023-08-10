import React from 'react';
//import AppRouter from './AppRouter';
import './App.css';
import NavBar from './components/NavBar';
import { isMobile } from 'react-device-detect';
import EmailForm from './components/EmailForm';
import { HashLink } from 'react-router-hash-link';
import Portfolio from './components/Portfolio';
// import { Link } from 'react-router-dom';
//import { Link } from "react-router-dom";
// import { HashRouter, Route, Routes } from 'react-router-dom';


function Main() {
  document.body.style.backgroundColor = 'black';

  return (
    <div id='' className="App">
      <NavBar/>
      <div style={{backgroundColor:'black', paddingTop: '30vh', color:'white' }}>
        <h1 className="h1Text"  style={{fontSize:h1Size(), fontWeight:'bold'}}>
          Tristan Kerec
        </h1>
        <h2 className='h2TextAnim' style={{fontSize:h1Size() * 0.5, fontWeight:'normal'}}>
          Bachelor of Computing Honours Graduate
          </h2>
        <h3 className='h3TextAnim' style={{ paddingBottom:'10px', fontSize:h1Size() * 0.43, fontWeight:'normal'}}>
          University of Guelph, Ontario, Canada
        </h3>
        <div className='divAnim'>
        <HashLink smooth to='/#about'><button 
            className="btn btn-link text-decoration-none"
            type="button"
            onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
            onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
            style={{fontWeight:'500', color:'#2ecc70'}}
            >
                Learn More <i className="bi bi-chevron-down"></i>
        </button></HashLink>
        <a href="/TristanKerecCV.pdf" download>
          <button
            className="btn"
            type="button"
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
            style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }}
            // style={{ fontWeight: '500', color: 'black'}}
          >
            Download Resume
          </button>
        </a>
        <div>
        <a href="https://github.com/tristankerec" target='_blank' rel='noreferrer'>
          <button
          className="btn btn-link text-decoration-none"
          type="button"
          style={{transition: 'color 0.3s', fontWeight:'500', color:'gray', fontSize:isMobile ? h1Size()*.6 : h1Size() * .38}}>
          <i className="bi bi-github"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/tristan-kerec-879a82198/" target='_blank' rel='noreferrer'>
          <button
          className="btn btn-link text-decoration-none"
          type="button"
          style={{fontWeight:'500', color:"gray", fontSize:isMobile ? h1Size()*.6 : h1Size() * .38}}>
          <i className="bi bi-linkedin"></i>
          </button>
        </a>
        </div>
        </div>
        <div style={{paddingBottom:'50vh'}}></div>
        <div id='about' style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:isMobile ? '2vh':'1vh'}}>
          About
        </h1>
        <div style={{ textAlign:'center', maxWidth: isMobile ? '95vw' : '70vw', margin:'0 auto'}}>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>Hi! My name is Tristan Kerec, and I am a hard working, dedicated, and disciplined Bachelor of Computing Honours Graduate with a major in Software Engineering.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>I build products that put the user experience first.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>Some of the programming languages, technologies, and frameworks that I am proficient in are JavaScript, React, Next.js, Vue.js, HTML, CSS, REST API, GraphQL, C, Python, Flutter, Java, Ruby, Rails, and SQL. All additional programming languages, technologies, and frameworks that I am proficient in can be found on my <a href="/TristanKerecCV.pdf" target="_blank" onMouseEnter={(e) => e.target.style.color = '#1e9c53'} onMouseLeave={(e) => e.target.style.color = '#2ecc70'} style={{color: '#2ecc70'}}>resume</a>.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'0vh'}}>Continue to view some of my most exciting projects.</p>
          <HashLink smooth to='/#portfolio'><button 
              className="btn btn-link text-decoration-none hover-button"
              type="button"
              onMouseEnter={(e) => e.target.style.color = '#1e9c53'}
              onMouseLeave={(e) => e.target.style.color = '#2ecc70'}
              style={{fontWeight:'500', color:'#2ecc70', fontSize:isMobile ? h1Size()*.9: h1Size() * .6}}
              >
                <i className="bi bi-chevron-down"></i>
          </button></HashLink>
          <div style={{paddingBottom:'20vh'}}/>
        </div>
        <div id='portfolio' style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:isMobile ? '2vh':'1vh'}}>
          Portfolio
        </h1>
        <h4 style={{fontSize: isMobile ? h1Size() * .5 : h1Size() * .32, paddingBottom:'2vh'}}>Explore some of my most exciting projects.</h4>
        <Portfolio/>
        <div style={{paddingBottom:isMobile ? '20vh':'20vh'}}></div>
        <div id='contact' style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:isMobile ? '2vh':'1vh'}}>
          Contact
        </h1>
        <EmailForm></EmailForm>
        <div style={{paddingBottom:isMobile ? '40vh':'40vh'}}/>
      </div>
    </div>
  );
}

export default Main;


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