// import React,{Component} from 'react';
// class Footer extends Component{
//     constructor() {
//         super();
//     }
//     render() {
//         return(
//             <div className="footer">

//             </div>
//         )
//     }
// }
// export default Footer;
import React from 'react';
import '../css/Footer.css';
import {BrowserRouter as Router, Link } from 'react-router-dom';

function Footer() {
  return (
    <Router>
        <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join with us and get your lecture schedules..
          </p>
          
          {/*<div className='input-areas'>*/}
          {/*  */}

          {/*</div>*/}
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <p>The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle. This platform manage the lecture scheduling venues.  </p>

            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <dd><b><a href="http://www.eng.ruh.ac.lk/"> Email       :    eng.ruh.ac.lk </a></b></dd>
              <dd><b>Address    :    Hapugala, Galle, Sri Lanka</b></dd>
              <dd><b> Tele      :   +(94)0 91 2245765-8</b></dd>
              <dd><b>Fax        :   +(94)0 91 2245762</b></dd>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            
            <div className='footer-link-items'>
              <h2>Related Links</h2>
            <a href="https://www.ugc.ac.lk/">University Grant Commission</a>
              <a href="https://www.ruh.ac.lk/">University of Ruhuna</a>
              < a href="http://lms.eng.ruh.ac.lk/">ENG-LMS</a>

              <a href="https://ieee.lk/">IEEE</a>



            </div>
          </div>
        </div>

            <div className='footer-logo'>
              <small className='website-rights'>©Faculty of Engineering-2021</small>
            </div>

      </div>
    </Router>
  );
}

export default Footer;

