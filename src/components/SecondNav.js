import {Button} from "react-bootstrap";
import 'semantic-ui-css/semantic.min.css';
import '../css/Nav.css';
import Img from "../images/icon.jpg"
import {BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction, OpenLoginAction, OpenSignupAction} from "../store/actions/AuthAction";
import { Dropdown, Image, Menu} from 'semantic-ui-react';
import {connect} from "react-redux";
import Registration from "./Auth/Registration/Registration";
import * as ReactBootStrap from "react-bootstrap";



function SecondNav(props){
    const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);
    const history=useHistory();
    const {auth,logout,openLog,openSign}=props;

    const handleLoginButton=()=>{
        // openLogin=true;
        // openSignup=false;
        setopenLogin(true);
        setopenSignup(false);
    }

    const handleSignupButton=()=>{
        // openLogin=false;
        // openSignup=true;
        setopenLogin(false);
        setopenSignup(true);
    }

    const openLoginB=()=>{
        // openLogin=true;
        setopenLogin(true);
    }

    const closeLoginB=()=>{
        // openLogin=false;
        setopenLogin(false);
    }

    const openSignupB=()=>{
        // openSignup=true;
        setopenSignup(true);

    }

    const closeSignupB=()=>{
        // openSignup=false;
        setopenSignup(false);
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
    const LogoutComponent=(name,his)=>{
        return(<>
            <Menu.Item position='right'>
                <Image avatar spaced='right' src={Img} />
                <Dropdown pointing='top right' text={name}>
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={"/profile"} text='My profile' icon='user' 
                        onClick={()=>{his.push("/profile");window.location.reload();}}
                        />
                        <Dropdown.Item onClick={()=>logout(his)} text='Logout' icon='power' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </>)
    }

    return (
        <Router>

            <div className="navbar-color2">
                <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark">
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                <nav>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                {!auth.isLoggedin?
                                    <React.Fragment>
                                        <div>
                                            <label className="f" style={{width:100,marginRight:20,fontSize:'20px',padding:0}}
                                                // type='submit'
                                                     onClick={
                                                         // handleLoginButton
                                                         ()=>openLog(true)
                                                     }>
                                                {/* <Link to="./Login"> */}
                                                <b>Log in</b>
                                                {/* </Link> */}
                                            </label>
                                            <label   className="e"
                                            style={{width:100,fontSize:'20px'}}
                                                // type='submit'
                                                    onClick={()=>openSign(true)}>
                                                {/* <Link to="./Register/student">  */}
                                                <b> Sign up</b>
                                                {/* </Link> */}
                                            </label>
                                        </div>
                                    </React.Fragment>:
                                    <React.Fragment>
                                        <div className="UserName">
                                            {/*<table><td><h6>{auth.user.userDetails.fullName}</h6></td>*/}
                                            {/*    <button onClick={()=>logout(history)}>Logout</button></table>*/}
                                            {LogoutComponent(auth.user.userDetails.fullName,history)}
                                        </div>
                                    </React.Fragment>
                                }
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </nav>
                {auth.loginModelOpen ? <Login/>:null}
                {auth.signupModalOpen ? <Registration/>:null}


                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        </Router>
    );
};

// export default FirstNav;
const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        },
        openLog:(open)=>{
            dispatch(OpenLoginAction(true));
            dispatch(OpenSignupAction(false));
        },
        openSign:(open)=>{
            dispatch(OpenSignupAction(true));
            dispatch(OpenLoginAction(false));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SecondNav);