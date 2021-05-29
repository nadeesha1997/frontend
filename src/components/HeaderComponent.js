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
import {LogoutAuthAction, OpenLoginAction, OpenSignupAction} from "../store/actions/AuthAction"
import {connect} from "react-redux";
function Header(){
    /*const [openLogin, setopenLogin] = useState(false);
    const [openSignup, setopenSignup] = useState(false);
    const history=useHistory();
    const {auth,logout,openLog}=props;

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
*/
    return (
        <Router>
            <div className="navbar-color">
                <nav  className="navbar navbar-expand-lg navbar-fixed-top n" >
                    <Image img src={logo3} alt="logo"  width={300} height={150} margin={15}/>
                    <div className="text">
                        <ul>
                            <li>
                                <h4> <b>FACULTY OF ENGINEERING</b></h4>
                                <h4><b>UNIVERSITY OF RUHUNA</b></h4>
                                <h4><b>LECTURE SCHEDULE MANAGEMENT SYSTEM</b></h4>
                            </li>
                        </ul>
                    </div>
                    {/*<table>
                        <td>
                            {!auth.isLoggedin?
                            <React.Fragment>
                                <div className="align">
                                    <Button  style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:120,marginRight:20}}
                                    // type='submit' 
                                    onClick={
                                        // handleLoginButton
                                        ()=>openLog(true)
                                    }>
                                         <Link to="./Login">
                                            <b>LOG IN</b>  
                                             </Link>
                                    </Button>
                                    <Button style={{width:180,backgroundColor:'#440151',marginTop:10,marginLeft:100,marginRight:20}}
                                    // type='submit' 
                                    onClick={handleSignupButton}>
                                         <Link to="./Register/student">
                                        <b> REGISTER</b>  
                                         </Link>
                                    </Button>
                                </div>
                            </React.Fragment>:
                            <React.Fragment>
                                <h5>{auth.user.userDetails.fullName}</h5>
                                <button onClick={()=>logout(history)}>Logout</button>
                            </React.Fragment>
                        }
                        </td>
                    </table>*/}
                </nav>
                {/*{
                    auth.loginModelOpen
                    // openLogin
                    ?
                <Login
                // closeModal={closeLoginB}
                // isOpen={openLogin}
                // handleSubmit={handleSubmit}
                />:null}*/}
            </div>
        </Router>
    );
};

// export default FirstNav;
/*
const mapStateToProps=(userState)=>{
    return {
        auth:userState.auth
    }
};
*/

/*const mapDispatchToProps=(dispatch)=>{
    return {
        logout:(history)=>{
            dispatch(LogoutAuthAction(history));
        },
        openLog:(open)=>{
            dispatch(OpenLoginAction(true));
            dispatch(OpenSignupAction(false));
        }
    }
};*/

export default Header;
