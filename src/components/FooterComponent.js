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
            Join with us and get letest business informations
          </p>
          
          <div className='input-areas'>
            

          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              
            </div>
          </div>
          <div className='footer-link-wrapper'>
            
            <div className='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                BIZZNEWS
                
          </Link>
            </div>
            <small className='website-rights'>BIZZNEWS © 2021</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <i class='fab fa-facebook-f' />
              </Link>
              <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <i className='fab fa-instagram' />
              </Link>
              <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
              >
                <i className='fab fa-youtube' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <i className='fab fa-twitter' />
              </Link>
              <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i className='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default Footer;

