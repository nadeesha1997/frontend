// // import React,{Component} from 'react';
// // class Header extends Component{
// //     constructor() {
// //         super();
// //     }
// //     render() {
// //         return(
// //             <div className="header">

// //             </div>
// //         )
// //     }
// // }
// // export default Header;
// import React from 'react'
// import { connect } from 'react-redux'
// import { Link, useHistory } from 'react-router-dom';
// import { LogoutAuthAction } from "../store/actions/AuthAction";

// function Header(props) {
//     const {auth,logout}=props;
//     const history=useHistory();
//     return (
//         <div className="header d-flex justify-content-center py-2 shadow-sm">
//             <Link to="/">
//                 <h5 className="font-weight-bold text-danger mx-3">LSMS</h5>
//             </Link>
//             <div className="m1-auto">
//                 {!auth.isLoggedin?<React.Fragment>
//                     <Link to="login">
//                     <button className="btn btn-danger btn-sm mx-2">Login</button>
//                 </Link>
//                 <Link to="signup">
//                     <button className="btn btn-danger btn-sm mr-5">Sign up</button>
//                 </Link>
//                 </React.Fragment>:
//                 <React.Fragment>
//                     <h5>{auth.name}</h5>
//                     <button className="btn btn-danger btn-sm mx-2" onClick={()=>logout(history)}>Log out</button>
//                 </React.Fragment>}
//             </div>
//         </div>
//     )
// }
// const mapStateToProps=(userState)=>{
//     return {
//         auth:userState
//     }
// };

// const mapDispatchToProps=(dispatch)=>{
//     return {
//         logout:(history)=>{
//             dispatch(LogoutAuthAction(history));
//         }
//     }
// };

// export default connect(mapStateToProps,mapDispatchToProps)(Header);
import {Button, Image} from "react-bootstrap";
import '../css/Nav.css';
import logo3 from './../images/logo3.png';
import {BrowserRouter as Router,Link, useHistory} from "react-router-dom";
import React,{useState} from "react";
import Login from './Auth/LoginComponent'
import {LogoutAuthAction} from "../store/actions/AuthAction"
import {connect} from "react-redux";
import Registration from "./Auth/Registration/Registration";
function Header(props){
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
            <div className="navbar-color" >
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" style={{backgroundColor:'#2b2a2b'}} >
                    <div >
                    <Image img style={{borderRadius:'300px', marginLeft:40}} src={logo3} alt="logo"  width={250} height={100} margin={10}   />
                    </div>
                    <div className="text" >
                        <ul>
                            <li >
                                <h6 > <b>FACULTY OF ENGINEERING</b></h6>
                                <h6><b>UNIVERSITY OF RUHUNA</b></h6>
                                <h6><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h6>
                            </li>
                        </ul>

                    </div>
                </nav>


                    <div  style={{ backgroundColor:'#7e278f'}} align="right">

                            {!auth.isLoggedin?
                            <React.Fragment>
                                <div className="align"  >
                                    <Button   style={{ width:180,backgroundColor:'#b4baba',marginLeft:45,marginRight:20}}
                                    // type='submit'
                                    onClick={handleLoginButton}>
                                        {/* <Link to="./Login"> */}
                                            <b>LOG IN</b>
                                            {/* </Link> */}
                                    </Button>
                                    <Button style={{width:180,backgroundColor:'#b5bab9',marginLeft:40,marginRight:20}}
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

                    </div>



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
        auth:userState.auth
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);
