// // import React,{Component} from 'react';
// // class Footer extends Component{
// //     constructor() {
// //         super();
// //     }
// //     render() {
// //         return(
// //             <div className="footer">
//
// //             </div>
// //         )
// //     }
// // }
// // export default Footer;
// import React from 'react';
// import '../css/Footer.css';
// import {BrowserRouter as Router, Link } from 'react-router-dom';
//
// function Footer() {
//   return (
//     <Router>
//         <div className='footer-container'>
//         <section className='footer-subscription'>
//           <p className='footer-subscription-heading'>
//             Join with us and get your lecture schedules..
//           </p>
//
//           {/*<div className='input-areas'>*/}
//           {/*  */}
//
//           {/*</div>*/}
//         </section>
//         <div class='footer-links'>
//           <div className='footer-link-wrapper'>
//             <div className='footer-link-items'>
//               <h2>About Us</h2>
//               <p>The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle. This platform manage the lecture scheduling venues.  </p>
//
//             </div>
//             <div className='footer-link-items'>
//               <h2>Contact Us</h2>
//               <dd><b><a href="http://www.eng.ruh.ac.lk/"> Email       :    eng.ruh.ac.lk </a></b></dd>
//               <dd><b>Address    :    Hapugala, Galle, Sri Lanka</b></dd>
//               <dd><b> Tele      :   +(94)0 91 2245765-8</b></dd>
//               <dd><b>Fax        :   +(94)0 91 2245762</b></dd>
//             </div>
//           </div>
//           <div className='footer-link-wrapper'>
//
//             <div className='footer-link-items'>
//               <h2>Related Links</h2>
//             <a href="https://www.ugc.ac.lk/">University Grant Commission</a>
//               <a href="https://www.ruh.ac.lk/">University of Ruhuna</a>
//               < a href="http://lms.eng.ruh.ac.lk/">ENG-LMS</a>
//
//               <a href="https://ieee.lk/">IEEE</a>
//
//
//
//             </div>
//           </div>
//         </div>
//
//             <div className='footer-logo'>
//               <small className='website-rights'>©Faculty of Engineering-2021</small>
//             </div>
//
//       </div>
//     </Router>
//   );
// }
//
// export default Footer;

import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyle";
import '../css/Footer.css';


const Footer = () => {
    return (
        <Box>

            <h1 style={{ color: "white",
                textAlign: "center",
                marginTop: "-50px" }}>
                Join with us and get your lecture schedules..
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <p style={{color:"white", fontSize:"20px"}}>The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle. This platform manage the lecture scheduling venues.  </p>
                    </Column>
                    <Column>

                        <Heading>Our Departments</Heading>
                        <FooterLink href="http://www.dcee.ruh.ac.lk/">Civil and Environment Department</FooterLink>
                        <FooterLink href="http://eie.eng.ruh.ac.lk/">Electrical and Information Engineering</FooterLink>
                        <FooterLink href="http://www.eng.ruh.ac.lk/dmme/">Mechanical and Manufacturing Engineering</FooterLink>
                        <FooterLink href="http://www.eng.ruh.ac.lk/is/index.php">Interdisciplinary studies</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="http://www.eng.ruh.ac.lk/">Email       :    eng.ruh.ac.lk</FooterLink>
                        <FooterLink href="#">Address    :    Hapugala, Galle, Sri Lanka</FooterLink>
                        <FooterLink href="#">Tele      :   +(94)0 91 2245765-8</FooterLink>
                        <FooterLink href="#">Fax        :   +(94)0 91 2245762</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Related Links</Heading>
                        <FooterLink href="https://www.ugc.ac.lk/">
                            <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  UGC
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://www.ruh.ac.lk/">
                            <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  University of Ruhuna
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="http://lms.eng.ruh.ac.lk/">
                            <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  ENG-LMS
                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://ieee.lk/">
                            <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  IEEE
                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;