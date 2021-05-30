import {Button, Image} from "react-bootstrap";
import '../css/Nav.css';
import logo2 from './../images/logo2.png';
import {BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction} from "../store/actions/AuthAction"
import {connect} from "react-redux";
import Registration from "./Auth/Registration/Registration";
function FirstNav(props){
    const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);
    const history=useHistory();
    const {auth,logout}=props;

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

    return (
        <Router>
            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <Image img src={logo2} alt="logo"  width={300} height={150} margin={5}/>
                    <div className="text">
                        <ul>
                            <li>
                                <h5> <b>FACULTY OF ENGINEERING</b></h5>
                                <h5><b>UNIVERSITY OF RUHUNA</b></h5>
                                <h5><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h5>
                            </li>
                        </ul>
                    </div>
                    <table>
                        <td>
                            {!auth.isLoggedin?
                            <React.Fragment>
                                <div className="align">
                                    <Button  style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:45,marginRight:20}} 
                                    // type='submit' 
                                    onClick={handleLoginButton}>
                                        {/* <Link to="./Login"> */}
                                            <b>LOG IN</b>  
                                            {/* </Link> */}
                                    </Button>
                                    <Button style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:40,marginRight:20}} 
                                    // type='submit' 
                                    onClick={handleSignupButton}>
                                        {/* <Link to="./Register/student">  */}
                                        <b> REGISTER</b>  
                                        {/* </Link> */}
                                    </Button>
                                </div>
                            </React.Fragment>:
                            <React.Fragment>
                                <h5>{auth.user.userDetails.fullName}</h5>
                                <button onClick={()=>logout(history)}>Logout</button>
                            </React.Fragment>
                        }
                        </td>
                    </table>
                </nav>
                {openLogin?
                <Login
                closeModal={closeLoginB} 
                isOpen={openLogin} 
                handleSubmit={handleSubmit}/>:null}

                {openSignup?
                    <Registration
                        closeModal={closeSignupB}
                        isOpen={openSignup}
                        handleSubmit={handleSubmit}/>:null}

            </div>
        </Router>
    );
};

// export default FirstNav;
const mapStateToProps=(userState)=>{
    return {
        auth:userState
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FirstNav);