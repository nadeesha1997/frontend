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

            <h1 style={{ color: "#4c0563",
                textAlign: "center",
                marginTop: "-50px",fontFamily:'Arial' }}>

                Join with us and get your lecture schedules..

            </h1>
            <br/>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <p style={{color:"#462450", fontSize:"14px",textAlign:"justify"}}>The Faculty of Engineering of University of Ruhuna was established on 1st July 1999 at Hapugala, Galle. This platform manage the lecture scheduling venues.  </p>
                    </Column>
                    <Column>

                        <Heading>Our Departments</Heading>
                        <FooterLink href="http://www.dcee.ruh.ac.lk/">Civil Engineering</FooterLink>
                        <FooterLink href="http://eie.eng.ruh.ac.lk/">Electrical Engineering</FooterLink>
                        <FooterLink href="http://www.eng.ruh.ac.lk/dmme/">Mechanical Engineering</FooterLink>
                        <FooterLink href="http://www.eng.ruh.ac.lk/is/index.php">Interdisciplinary studies</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="http://www.eng.ruh.ac.lk/">Email       :    eng.ruh.ac.lk</FooterLink>
                        <FooterLink >Hapugala, Galle, Sri Lanka</FooterLink>
                        <FooterLink >Tel :   +(94)0 91 2245765</FooterLink>
                        <FooterLink >Fax        :   +(94)0 91 2245762</FooterLink>
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
                <br/>
                <small className='website-rights'>©Faculty of Engineering-2021</small>

            </Container>
        </Box>
    );
};
export default Footer;







