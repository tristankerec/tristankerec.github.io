import React from 'react';
import NavBar from './NavBar';
import { isMobile } from 'react-device-detect';
import { HashLink as Link } from 'react-router-hash-link';
import './images.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import 'react-tooltip/dist/react-tooltip.css'

function TasteTwin() {
  document.body.style.backgroundColor = 'black';
  if (isMobile) {
    return (
      <>
      <div>
          <NavBar/>
          <div style={{backgroundColor:'black', paddingTop: '9vh', color:'white' }}>
              <div style={{maxWidth:'98vw', display:'flex', margin:'auto', alignItems:'flex-start',justifyContent:'space-between'}}>
              <div>
                <Link smooth to="/#portfolio"><button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}>
                <i className="bi bi-chevron-left"></i> Back</button></Link>
                </div>
                <div>
                <Link smooth to="/climate-risk-data-webapp">
                <button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}
                ><i className="bi bi-chevron-left"></i></button>
                </Link>
                <Link smooth to="/sticky-slime-showdown">
                <button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}
                ><i className="bi bi-chevron-right"></i></button>
                </Link>
                </div>
              </div>
              <h1 className="h1Text"  style={{paddingTop:'2vh',paddingBottom:'2vh',  fontSize:isMobile? h1Size()*.9:h1Size(), fontWeight:'bold', textAlign:'center'}}>
                  TasteTwin
              </h1>
              <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap',alignItems:'middle', gap:'2vh', maxWidth:'90vw', margin:'auto'}}>
                  <div style={{width:'90vw'}}>
                    <h2>Overview</h2>
                      <p>TasteTwin is a mobile app designed to help people find a place to eat.</p>
                      <h2>Description</h2>
                      <p>TasteTwin displays a selection of restaurants based on user preferences, and users take turns voting on the set of restaurants. Once all users have finalized their selections, TasteTwin returns a ranking of restaurants based on the best matches of all users involved.</p>
                      <h2>Technologies</h2>
                      <p>Flutter, Dart, Firebase.</p>
                      <h2>Gallery</h2>
                  </div>
                  <div className='tastetwinPicture2' style={{borderRadius:'20px',width:'80vw', maxWidth:'467px'}}></div>
                  <div className='tastetwinPicture3' style={{borderRadius:'20px',width:'80vw', maxWidth:'467px'}}></div>
                  <div className='tastetwinPicture4' style={{borderRadius:'20px',width:'80vw', maxWidth:'467px'}}></div>
                  <div className='tastetwinPicture5' style={{borderRadius:'20px',width:'80vw', maxWidth:'467px'}}></div>
              </div>
          </div>
          <div style={{paddingBottom:'100px'}}></div>
      </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
    );

  } else {

  return (
    
    <div>
        <NavBar/>
        <div style={{backgroundColor:'black', paddingTop: '9vh', color:'white' }}>
            <div style={{maxWidth:'98vw', display:'flex', margin:'auto', alignItems:'flex-start',justifyContent:'space-between'}}>
            <div>
                <Link smooth to="/#portfolio"><button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}>
                <i className="bi bi-chevron-left"></i> Back to Portfolio</button></Link>
                </div>
                <div>
                <Link smooth to="/climate-risk-data-webapp">
                <button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}
                ><i className="bi bi-chevron-left"></i>Previous</button>
                </Link>
                <Link smooth to="/sticky-slime-showdown">
                <button
                className="btn btn-link text-decoration-none"
                type="button"
                onMouseEnter={(e) => {e.target.style.color = '#1e9c53';}}
                onMouseLeave={(e) => {e.target.style.color = '#2ecc70';}}
                style={{fontWeight:'500', color:'#2ecc70'}}
                >Next <i className="bi bi-chevron-right"></i></button>
                </Link>
                </div>
            </div>
            <h1 className="h1Text"  style={{paddingBottom:'3vh',  fontSize:isMobile? h1Size()*.9:h1Size(), fontWeight:'bold', textAlign:'center'}}>
                TasteTwin
            </h1>
            <div style={{display:'flex', justifyContent:'space-between',alignItems:'flex-start',maxWidth:'80vw', gap:'2vw',margin:'auto'}}>
                <div style={{width:'35vw'}}>
                    <h2>Overview</h2>
                    <p>TasteTwin is a mobile app designed to help people find a place to eat.</p>
                    <h2>Description</h2>
                    <p>TasteTwin displays a selection of restaurants based on user preferences, and users take turns voting on the set of restaurants. Once all users have finalized their selections, TasteTwin returns a ranking of restaurants based on the best matches of all users involved.</p>
                    <h2>Technologies</h2>
                    <p>Flutter, Dart, Firebase.</p>
                    <div style={{ paddingTop:'20px', display:'flex', justifyContent:'space-between'}}>
                    </div>
                </div>
                {/* <div class='climateRiskPicture' style={{minWidth:'300px',width:'35vw', maxWidth:'35vw'}}></div> */}
                <div style={{width:'35vw'}} id="carouselExampleIndicators" className="carousel-dark carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                  <div style={{paddingTop:'20px'}}>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                </div>
                <div className="carousel-inner" style={{borderRadius:'20px'}}>
                    <div className="carousel-item active">
                      <div className='tastetwinPicture2' style={{minWidth:'300px',width:'35vw', maxWidth:'35vw'}}></div>

                    </div>
                    <div className="carousel-item">
                      <div className='tastetwinPicture3' style={{minWidth:'300px',width:'35vw', maxWidth:'35vw'}}></div>

                    </div>
                    <div className="carousel-item">
                      <div className='tastetwinPicture4' style={{minWidth:'300px',width:'35vw', maxWidth:'35vw'}}></div>

                    </div>
                    <div className="carousel-item">
                      <div className='tastetwinPicture5' style={{minWidth:'300px',width:'35vw', maxWidth:'35vw'}}></div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div>
        </div>
    </div>
  );
  }
}

export default TasteTwin;


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
