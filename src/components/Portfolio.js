import React from 'react';
import { isMobile } from 'react-device-detect';
import './images.css';
import { Link } from "react-router-dom";
//import { HashLink } from 'react-router-hash-link';



const Portfolio = () => {

  function addAnimation(id) {
    const customCard = document.querySelector(`#${id}`);
    //const customCard = document.querySelector('.customCard');
    customCard.classList.remove('reverse');
    customCard.classList.add('animate');
    // setIsHovered(true);
  }
  
  function removeAnimation(id) {
    const customCard = document.querySelector(`#${id}`);
    //const customCard = document.querySelector('.customCard');
    customCard.classList.remove('animate');
    customCard.classList.add('reverse');
    // setIsHovered(false);
  }
  if (isMobile) {
    return (
      <div style={{overflow:'hidden',display:'flex', flexWrap: 'wrap', justifyContent:isMobile ? 'center':'space-evenly', maxWidth:isMobile ?'100%':'90vw', margin:isMobile?'':'0 auto', gap: isMobile ? '1.5vh' : '80px'}}>
        <a href="/#/climate-risk-data-webapp" style={{color:'white'}}>
        <div style={{overflow:'hidden'}}>
          <div class="card bg-dark" style={{ minWidth:'300px',width:'80vw', maxWidth:'430px'}}>
            <div class="climateRiskPicture card-img-top card-img-bottom" style={{overflow:'hidden'}}>
              <div id="one" class="card-body mobileCard" style={{overflow:'hidden'}}>
                <h5 style={{fontWeight:'bold', fontSize:'18px'}}>Climate Risk Data Web App</h5>
                <p class="card-text" style={{fontSize:'13px'}}>A Next.js web-app to visualize sample Climate risk data in a map, data table, and line graph.</p>
                <div style={{display:"flex",justifyContent:'center'}}>
                <a href="/#/climate-risk-data-webapp"
                  className="btn"
                  style={{ padding:'0px', fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  <button
                  className="btn"
                  type="button"
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                  style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  Learn More
                  </button>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </a>
        <div style={{overflow:'hidden'}}>
          <div class="card bg-dark" style={{ minWidth:'300px',width:'80vw', maxWidth:'430px'}}>
          <a href="/#/tastetwin" style={{color:'white'}}>
            <div class="tastetwinPicture card-img-top card-img-bottom" style={{overflow:'hidden'}}>
              <div id="one" class="card-body mobileCard" style={{overflow:'hidden'}}>
                <h5 style={{fontWeight:'bold', fontSize:'18px'}}>TasteTwin</h5>
                <p class="card-text" style={{fontSize:'13px'}}>A mobile app to designed to help people find a place to eat.</p>
                <div style={{display:"flex",justifyContent:'center'}}>
                <a href="/#/tastetwin"
                  className="btn"
                  style={{ padding:'0px', fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  <button
                  className="btn"
                  type="button"
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                  style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  Learn More
                  </button>
                </a>
                </div>
              </div>
            </div>
          </a>
          </div>
        </div>
        <div style={{overflow:'hidden'}}>
          <div class="card bg-dark" style={{ minWidth:'300px',width:'80vw', maxWidth:'430px'}}>
          <a href="/#/sticky-slime-showdown" style={{color:'white'}}>
            <div class="slimePicture card-img-top card-img-bottom" style={{overflow:'hidden'}}>
              
              <div id="one" class="card-body mobileCard" style={{overflow:'hidden'}}>
                <h5 style={{fontWeight:'bold', fontSize:'18px'}}>Sticky Slime Showdown</h5>
                <p class="card-text" style={{fontSize:'13px'}}>A Unity micro game about a slime that progresses through an evolving world.</p>
                <div style={{display:"flex",justifyContent:'center'}}>
                <a href="/#/sticky-slime-showdown"
                  className="btn"
                  style={{ padding:'0px', fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  <button
                  className="btn"
                  type="button"
                  onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                  style={{ fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1', fontSize:'14px'}}>
                  Learn More
                  </button>
                </a>
                </div>
              </div>
            </div>
          </a>
          </div>
        </div>
      </div>
    );
  } else {
    
  return (
    <div style={{overflow:'hidden',display:'flex', flexWrap: 'wrap', justifyContent:isMobile ? 'center':'space-evenly', maxWidth:isMobile ?'100%':'90vw', margin:isMobile?'':'0 auto', gap: isMobile ? '1.5vh' : '80px'}}>
      <div style={{overflow:'hidden'}}>
        <div class="card bg-dark" style={{ minWidth:isMobile ? '85vw':'430px'}} onMouseEnter={() => {addAnimation("one");}} onMouseLeave={() => {removeAnimation("one");}}>
        <a href="/#/climate-risk-data-webapp" style={{color:'white'}}>
          <div class="climateRiskPicturePort card-img-top card-img-bottom" style={{overflow:'hidden'}}>
            <div id="one" class="card-body customCard" style={{overflow:'hidden'}}>
                <h5 style={{fontWeight:'bold', fontSize:'26px'}}>Climate Risk Data Web App</h5>
                <p class="card-text" style={{fontSize:'16px'}}>A Next.js web-app to visualize sample Climate risk data in a map, data table, and line graph.</p>
                <div style={{display:"flex",justifyContent:'center', paddingInline:'40px'}}>
                  <a href="/#/climate-risk-data-webapp">
                    <button 
                    className="btn"
                    type="button"
                    onMouseEnter={(e) => {e.target.style.color = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                    onMouseLeave={(e) => {e.target.style.color = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                    style={{fontWeight:'500', color:'#2ecc70', borderColor:'#2ecc70', flex:'1'}}
                    >
                    Learn More
                    </button>
                  </a>
                  <div style={{padding:'10px'}}></div>
                  <a href="https://frontend-project-seven.vercel.app/" target="_blank" rel="noreferrer">
                    <button
                    className="btn"
                    type="button"
                    onMouseEnter={(e) => {e.target.style.backgroundColor = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                    onMouseLeave={(e) => {e.target.style.backgroundColor = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                    style={{fontWeight: '500', color: 'black', backgroundColor: '#2ecc70', borderColor: '#2ecc70', flex:'1'}}>
                    Explore
                    </button>
                  </a>
                </div>
            </div>
            
          </div>
        </a>
        </div>
      </div>
      <div style={{overflow:'hidden'}}>
        <div class="card bg-dark" style={{minWidth:isMobile ? '85vw':'430px'}} onMouseEnter={() => {addAnimation("two");}} onMouseLeave={() => {removeAnimation("two");}}>
        <a href="/#/tastetwin" style={{color:'white'}}>
            <div class="tastetwinPicture card-img-top card-img-bottom" style={{overflow:'hidden'}}>
                <div id="two" class="card-body customCard" style={{overflow:'hidden'}}>
                    <h5 style={{fontWeight:'bold', fontSize:'26px', paddingBottom:'px'}}>TasteTwin</h5>
                    <p class="card-text" style={{fontSize:'16px'}}>A mobile app to designed to help people find a place to eat.</p>
                    <div style={{display:"flex",justifyContent:'center', paddingInline:'40px'}}>
                    <a href="/#/tastetwin">
                      <button 
                      className="btn"
                      type="button"
                      onMouseEnter={(e) => {e.target.style.color = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                      onMouseLeave={(e) => {e.target.style.color = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                      style={{fontWeight:'500', color:'#2ecc70', borderColor:'#2ecc70', flex:'1'}}
                      >
                      Learn More
                      </button>
                      </a>
                      <div style={{padding:'10px'}}></div>
                    </div>
                </div>
            </div>
        </a>
        </div>
      </div>
      <div style={{overflow:'hidden'}}>
        <div class="card bg-dark" style={{ minWidth:isMobile ? '85vw':'430px'}} onMouseEnter={() => {addAnimation("three");}} onMouseLeave={() => {removeAnimation("three");}}>
          <a href="/#/sticky-slime-showdown" style={{color:'white'}}>
            <div class="slimePicture card-img-top card-img-bottom" style={{overflow:'hidden'}}>
                <div id="three" class="card-body customCard" style={{overflow:'hidden'}}>
                    <h5 style={{fontWeight:'bold', fontSize:'26px'}}>Sticky Slime Showdown</h5>
                    <p class="card-text" style={{fontSize:'16px'}}>A Unity micro game about a slime that progresses through an evolving world.</p>
                    <div style={{display:"flex",justifyContent:'center', paddingInline:'40px'}}>
                      <a href="/#/sticky-slime-showdown">
                        <button 
                        className="btn"
                        type="button"
                        onMouseEnter={(e) => {e.target.style.color = '#1e9c53'; e.target.style.borderColor='#1e9c53';}}
                        onMouseLeave={(e) => {e.target.style.color = '#2ecc70'; e.target.style.borderColor='#2ecc70';}}
                        style={{fontWeight:'500', color:'#2ecc70', borderColor:'#2ecc70', flex:'1'}}
                        >
                        Learn More
                        </button>
                      </a>
                      <div style={{padding:'10px'}}></div>
                    </div>
                </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    
  );
  }
};

export default Portfolio;
