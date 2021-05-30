import React, { useState } from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
// import HomepageNavbar from "../TimeTable/HomepageNavbar";

const RegistrationNavBar =(props)=> {
    // let now= new Date();
    // const [date, setDate] = useState(now);

        return (
            <div>
                {/*<HomepageNavbar updateDate={this.updateDate}/>*/}
                <nav className="navbar navbar-expand-sm  navbar-fixed-top " style={{padding:0, marginBottom:20,backgroundColor:'#31023e'}}>

                    {/*/!* <a className="navbar-brand" href="#">ENG</a>*/}
                    {/*<Image img src={logo2} alt="logo"  width={100} height={100}/>*!/*/}
                    {/*<Image img src={logo2} alt="logo"  width={150} height={75} margin={4}/>*/}
                    {/*/!*<a className="navbar-brand" href="#" >LSMS</a>*!/*/}
                    {/*<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">*/}
                    {/*    <span className="navbar-toggler-icon"/>*/}
                    {/*</button>*/}


                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">
                                You are not logged in.

                                {/*<Button style={{*/}
                                {/*    width: 150,*/}
                                {/*    backgroundColor: '#440151',*/}
                                {/*    marginLeft: 20,*/}
                                {/*    marginRight: 10*/}
                                {/*}} type='submit'>*/}

                                {/*    <Link to="/Login"><b>Log In</b> </Link>*/}
                                {/*</Button>*/}

                                {/*<span className="fa fa-sign-in"/> <Link to="./Login">Login</Link>*/}
                            </a>
                           {/* <a className="navbar-brand   mb-.2">
                                <h6>You are not log in.</h6>
                            </a>*/}
                        </li>
                    </ul>


                </nav>
            </div>
        );
}
export default RegistrationNavBar;