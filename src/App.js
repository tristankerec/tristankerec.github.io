//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import { isMobile } from 'react-device-detect';
import EmailForm from './components/EmailForm';

function App() {

  const aboutRef = React.createRef();
  const portfolioRef = React.createRef();
  const contactRef = React.createRef();
  document.body.style.backgroundColor = 'black';

  return (
    <div className="App">
      <NavBar aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
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
        <button 
            className="btn btn-link text-decoration-none"
            type="button"
            onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
            onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
            style={{fontWeight:'500', color:'#2ecc70'}}
            onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth", block: "start"})}>
                Learn More <i className="bi bi-chevron-down"></i>
        </button>
        <a href="/TristanKerecCV.pdf" download>
          <button
            className="btn btn-primary"
            type="button"
            onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
            style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70' }}
          >
            Download Resume
          </button>
        </a>
        <div style={{display:'flex', justifyContent:'space-between',margin:'0 auto', maxWidth:'80vw'}}></div>
        <a href="https://github.com/tristankerec" target='_blank' rel='noreferrer'>
          <button
          className="btn btn-link text-decoration-none"
          type="button"
          onMouseEnter={(e) => {e.target.style.color = '#fff';}}
          onMouseLeave={(e) => e.target.style.color = 'gray'}
          style={{transition: 'color 0.3s', fontWeight:'500', color:'gray', fontSize:isMobile ? h1Size()*.6 : h1Size() * .38}}>
          <i className="bi bi-github"></i>
          </button>
        </a>
        <a href="https://www.linkedin.com/in/tristan-kerec-879a82198/" target='_blank' rel='noreferrer'>
          <button
          className="btn btn-link text-decoration-none"
          type="button"
          onMouseEnter={(e) => {e.target.style.color = '#0077b5'}}
          onMouseLeave={(e) => e.target.style.color = 'gray'}
          style={{transition: 'color 0.3s',fontWeight:'500', color:"gray", fontSize:isMobile ? h1Size()*.6 : h1Size() * .38}}>
          <i className="bi bi-linkedin"></i>
          </button>
        </a>
        </div>
        <div style={{paddingBottom:'100vh'}}></div>
        <div ref={aboutRef} style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:isMobile ? '2vh':'3vh'}}>
          About
        </h1>
        <div style={{ textAlign:'center', maxWidth: isMobile ? '95vw' : '70vw', margin:'0 auto'}}>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>Hi! My name is Tristan Kerec, and I am a hard working, dedicated, and disciplined Bachelor of Computing Honours Graduate with a major in Software Engineering.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>I build products that put the user experience first.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'1vh'}}>Some of the programming languages, technologies, and frameworks that I am proficient in are JavaScript, React, Next.js, Vue.js, HTML, CSS, REST API, GraphQL, C, Python, Flutter, Java, Ruby, Rails, and SQL. All additional programming languages, technologies, and frameworks that I am proficient in can be found on my <a href="/TristanKerecCV.pdf" target="_blank" onMouseEnter={(e) => e.target.style.color = '#1e9c53'} onMouseLeave={(e) => e.target.style.color = '#2ecc70'} style={{color: '#2ecc70'}}>resume</a>.</p>
          <p style={{fontSize:isMobile ? h1Size()*.45 : h1Size() * .32, fontWeight:'normal', paddingBottom:'0vh'}}>Continue to view some of my most exciting projects.</p>
          <button 
              className="btn btn-link text-decoration-none hover-button"
              type="button"
              onMouseEnter={(e) => e.target.style.color = '#1e9c53'}
              onMouseLeave={(e) => e.target.style.color = '#2ecc70'}
              style={{fontWeight:'500', color:'#2ecc70', fontSize:isMobile ? h1Size()*.9: h1Size() * .6}}
              onClick={() => portfolioRef.current.scrollIntoView({behavior: "smooth", block: "start"})}>
                <i className="bi bi-chevron-down"></i>
          </button>
          <div style={{paddingBottom:'30vh'}}/>
        </div>
        <div ref={portfolioRef} style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:'100vh'}}>
          Portfolio
        </h1>
        <div ref={contactRef} style={{paddingBottom:isMobile ? '12vh':'20vh'}}/>
        <h1 style={{fontSize:h1Size(), fontWeight:'bold', paddingBottom:isMobile ? '1vh':'0vh'}}>
          Contact
        </h1>
        <EmailForm></EmailForm>
        <div style={{paddingBottom:isMobile ? '100vh':'100vh'}}/>
      </div>
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