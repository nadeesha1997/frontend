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
                        <Dropdown.Item as={Link} to={`/profile/username`} text='My profile' icon='user'/>
                        <Dropdown.Item onClick={()=>logout(his)} text='Logout' icon='power' />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </>)
    }

    return (
        <Router>
            <div className="navbar-color2">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                {!auth.isLoggedin?
                                    <React.Fragment>
                                        <div>
                                            <Button  style={{width:180,backgroundColor:'#440151',marginTop:5,marginLeft:1000,marginRight:10,marginBottom:5}}
                                                // type='submit'
                                                     onClick={
                                                         // handleLoginButton
                                                         ()=>openLog(true)
                                                     }>
                                                {/* <Link to="./Login"> */}
                                                <b>LOG IN</b>
                                                {/* </Link> */}
                                            </Button>
                                            <Button style={{width:180,backgroundColor:'#440151',marginTop:5,marginLeft:90,marginRight:20,marginBottom:5}}
                                                // type='submit'
                                                    onClick={()=>openSign(true)}>
                                                {/* <Link to="./Register/student">  */}
                                                <b> REGISTER</b>
                                                {/* </Link> */}
                                            </Button>
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
